"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValidationService = ValidationService_1 = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (label, validatorName, validatorValue) {
        var config = {
            'required': ((label != '') ? label + ' is required' : 'Field is required'),
            'invalidEmailAddress': 'Enter valid email address',
            'invalidPassword': 'Enter valid password. Password must be at least 6 characters long, and contain a number.',
            'invalidConfirmPassword': 'Password does not match.',
            'invalidAlphabet': 'Enter only alphabet character in ' + label,
            'invalidNumber': 'Enter only numbers in ' + label,
            'pattern': label + ' is incorrect',
            'invalidDuplicate': label + ' already exists.',
            'invalidItem': 'invalid item',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'maxlength': "Maximun length " + validatorValue.requiredLength,
            'invalidDate': ((label != '') ? label + ' is invalid' : 'Date is invalid'),
            'invalidConversion': label,
            'invalidDiscount': label
        };
        return config[validatorName];
    };
    ValidationService.validateDate = function (control) {
        if (control.hasError('required') || (ValidationService_1.isBlank(control.value) || (ValidationService_1.isString(control.value) && control.value.trim() == ""))) {
            return null;
        }
        if (/^\d{2}[./-]\d{2}[./-]\d{4}$/.test(control.value)) {
            return null;
        }
        return { 'invalidDate': true };
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.hasError('required') || (ValidationService_1.isBlank(control.value) || (ValidationService_1.isString(control.value) && control.value.trim() == ""))) {
            return null;
        }
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        return { 'invalidEmailAddress': true };
    };
    ValidationService.mobileValidator = function (control) {
        var mobFormat = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
        if (mobFormat.test(control.value)) {
            return null;
        }
        return { 'invalidMobileNumber': true };
    };
    ValidationService.customRequired = function (control) {
        return (ValidationService_1.isBlank(control.value) || ((ValidationService_1.isString(control.value) && control.value.trim() == "") || control.value == 0) ?
            { "required": true } :
            null);
    };
    ValidationService.isBlank = function (value) {
        return (typeof value == 'undefined' || !value) ? true : false;
    };
    ValidationService.isString = function (value) {
        return (typeof value == 'string') ? true : false;
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        return { 'invalidPassword': true };
    };
    ValidationService.hasWhiteSpace = function (control) {
        if (/^\s*$/.test(control.value) == false) {
            return null;
        }
        return { 'required': true };
    };
    ValidationService.allowAlphabet = function (control) {
        // if (control.hasError('required') || (ValidationService.isBlank(control.value) || (ValidationService.isString(control.value) && control.value.trim() == ""))) {
        //     return null;
        // }
        // console.log(control.value);
        if (/^[A-Za-z ]+$/.test(control.value)) {
            return null;
        }
        return { 'required': true };
    };
    ValidationService.allowNumeric = function (control) {
        if (control.hasError('required') || (ValidationService_1.isBlank(control.value) || (ValidationService_1.isString(control.value) && control.value.trim() == ""))) {
            return null;
        }
        if (/^[0-9]+$/.test(control.value)) {
            return null;
        }
        return { 'invalidNumber': true };
    };
    ValidationService.confirmPassValidator = function (control) {
        if (control.hasError('required')) {
            return null;
        }
        var form = control.root;
        if (!ValidationService_1.isBlank(form) && !ValidationService_1.isBlank(form.controls) && form.controls.hasOwnProperty('password')) {
            if (form.controls['password'].value == "" || form.controls['password'].value == control.value) {
                return null;
            }
        }
        return { 'invalidConfirmPassword': true };
    };
    ValidationService.resetForm = function (form) {
        for (var name in form.controls) {
            // ValidationService.form.controls[name].updateValue('');
            form.controls[name].setErrors(null);
            form.controls[name].reset();
            //form.controls[name].
        }
    };
    //static validateForm(form) {
    //    for (var name in form.controls) {
    //        //if(!(notCheck && notCheck.indexOf(name) !== -1)){
    //        form.controls[name].updateValueAndValidity();
    //        form.controls[name].markAsTouched();
    //        //}
    //    }
    //    return form.valid;
    //}
    ValidationService.validateForm = function (form, notCheck) {
        if (notCheck === void 0) { notCheck = []; }
        debugger;
        for (var name in form.controls) {
            //if(!(notCheck && notCheck.indexOf(name) !== -1)){
            form.controls[name].updateValueAndValidity();
            form.controls[name].markAsTouched();
            //}
        }
        return form.valid;
    };
    return ValidationService;
}());
ValidationService = ValidationService_1 = __decorate([
    core_1.Injectable()
], ValidationService);
exports.ValidationService = ValidationService;
var ValidationService_1;
//# sourceMappingURL=ValidationService.js.map