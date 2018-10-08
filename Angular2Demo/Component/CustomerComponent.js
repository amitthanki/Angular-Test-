"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { FormGroup,FormControl,Validators } from "@angular/forms";
var forms_1 = require("@angular/forms");
var CountryStateService_1 = require("../Services/CountryStateService");
var UserService_1 = require("../Services/UserService");
var Global_1 = require("../Global/Global");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var router_1 = require("@angular/router");
var TableComponent_1 = require("../Component/TableComponent");
var SpinnerServices_1 = require("../Services/SpinnerServices");
//import { MessageBox, MessageBoxButton, MessageBoxStyle } from '../Component/MessageBox';
//import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
var AuthService_1 = require("../Component/AuthService");
var ValidationService_1 = require("../Services/ValidationService");
var ControlMessage_1 = require("../Services/ControlMessage");
var CustomerComponent = (function () {
    function CustomerComponent(_formBuilder, _service, _userService, _router, loaderService, validationService, authservice) {
        this._formBuilder = _formBuilder;
        this._service = _service;
        this._userService = _userService;
        this._router = _router;
        this.loaderService = loaderService;
        this.validationService = validationService;
        this.authservice = authservice;
        this.serviceObj = _service;
        this.countries = this.serviceObj.getCountries();
        this.LoadCustomer();
        //  this.loaderService.display(false);
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            //name: ['Amit', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)])],
            //name: ['Amit', [Validators.required]],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, ValidationService_1.ValidationService.emailValidator])],
            street: [],
            city: [],
            postalcode: [null, forms_1.Validators.pattern('^[1-9][0-9]{4}$')],
            SelectedCountry: ['', forms_1.Validators.required]
        });
    };
    CustomerComponent.prototype.LoadCustomer = function () {
        var _this = this;
        //  this.loaderService.display(true);
        this._userService.GetData(Global_1.Global.GetBASE_URL).subscribe(function (customer) {
            _this.customer = customer, console.log(customer);
        }, function (error) { return error; });
    };
    /* userForm = new FormGroup({
         name: new FormControl('Amit', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
         email: new FormControl(),
         address: new FormGroup({
             street: new FormControl(),
             city: new FormControl(),
             postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
         })
 
     });*/
    CustomerComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        //ValidationService.validateForm(this.userForm);         
        // const controls = this.userForm;
        // this.ControlMessages.control();
        var serializer = new router_1.DefaultUrlSerializer();
        debugger;
        //  let a = serializer.serialize(this.userForm);
        this._userService.PostData(Global_1.Global.BASE_URL, formData._value).subscribe(function (data) {
            // alert("Success");
            if (data == 1) {
                //MessageBox.show(this.dialog, "", "hi", "Erw", MessageBoxButton.ok, false,44,"350px");
                formData.reset();
            }
            else {
                _this.LoadCustomer();
                console.log(data);
            }
        }, function (error) {
            alert("error");
            console.log(error);
        });
    };
    CustomerComponent.prototype.resetForm = function (form) {
        for (var name in form.controls) {
            // ValidationService.form.controls[name].updateValue('');
            form.controls[name].setErrors(null);
            form.controls[name].reset();
            //form.controls[name].
        }
    };
    CustomerComponent.prototype.onReset = function (FormData) {
        ValidationService_1.ValidationService.resetForm(FormData);
    };
    //console.log(this.userForm.value);
    // let body = JSON.stringify(formData._value);
    //console.log(body)
    //     let headers = new Headers({ 'Content-type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._http.post(Global.BASE_URL, body, options)
    //         .map((response: Response) => <any>response.json()).
    //         subscribe(
    //         data => {
    //             //debugger;
    //             if (data == 1)// success
    //             {
    //             }
    //             else {
    //             }
    //
    //         },
    //         error => {
    //         }
    //         );
    CustomerComponent.prototype.editUser = function (id) {
        this._router.navigate(['/Edit'], { queryParams: { Id: id, 'price-range': 'not-cheap' } });
    };
    return CustomerComponent;
}());
__decorate([
    core_1.ViewChild(TableComponent_1.TableComponent),
    __metadata("design:type", TableComponent_1.TableComponent)
], CustomerComponent.prototype, "TableComponent", void 0);
__decorate([
    core_1.ViewChild(ControlMessage_1.ControlMessages),
    __metadata("design:type", ControlMessage_1.ControlMessages)
], CustomerComponent.prototype, "ControlMessages", void 0);
CustomerComponent = __decorate([
    core_1.Component({
        templateUrl: "../UI/Customer.html?v=" + new Date().getTime(),
        styles: ["\n        input.ng-invalid{border-left:5px solid red;}\n        input.ng-valid{border-left:5px solid green;}\n        "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, CountryStateService_1.CountryStateService, UserService_1.UserService, router_1.Router, SpinnerServices_1.LoaderService, ValidationService_1.ValidationService, AuthService_1.AuthService])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//// Final Submit 
//FinalSubmit() {           
//    this.Mainerrors = [];
//    const controls = this.teamForm;
//    for (const field in controls.controls) {
//        const a = this.teamForm.get(field);
//        this.TeamFormError[field] = '';
//        if (!a.valid) {
//            const message = this.ValidationMessageForTeam[field];
//            for (const key in a.errors) {
//                this.TeamFormError[field] += message[key];
//                this.Mainerrors.push(this.TeamFormError[field]);
//            }
//        }
//    }
//    if (this.team.employees.length == 0) {
//        const message = this.ValidationMessageForTeam['EmpDetails'];
//        this.Mainerrors.push(message['required']);
//    }
//    if (this.errors.length == 0) {
//        let i = JSON.stringify(this.team);
//        console.log(i);
//    }
//}
//onReset() {
//    this.team.employees = [];
//    this.team.TeamManagerName = "";
//    this.team.TeamName = "";
//    this.Mainerrors = [];
//}
//// Search On Change
//onChange() {
//    this.SearchTeamAndEmp(1);
//}
////Country Change Event
//CountryDropdown(CountryID: number) {           
//    if (CountryID == 3) {
//        this.IshideShow = true;
//        this.teamForm.get('EmpDetails').get("otherCountry").setValidators(Validators.required);
//    }
//    else {
//        this.IshideShow = false;
//        this.teamForm.get('EmpDetails').get("otherCountry").clearValidators();
//    }
//    this.teamForm.get('EmpDetails').get("otherCountry").updateValueAndValidity();
//}
///// search team and Employee Details
//SearchTeamAndEmp(id: number) {         
//    this._userService.get(Global.TeamDetails).subscribe(team => {
//        this.team = team.data;
//        sessionStorage.setItem("team", team.data);
//    });
//}
///// Validation Message for Employees
//EmpFormError = {
//    'empId': '',
//    'empName': ''
//    //'country': '',
//    //'otherCountry':''
//};
//validationMessageforEmp = {
//    'empId': {
//        'required': 'Id is required.',
//    },
//    'empName': {
//        'required': 'Name is required.',
//        'minlength': 'Name should be 4 Characters.'
//    },
//    //'country': {
//    //    'required': 'Country is required.',
//    //},
//    //'otherCountry': {
//    //    'required': 'Other Country Name is required.',
//    //},
//}
//// Validation Message for Team 
//TeamFormError = {
//    'teamName': '',
//    'teamManager': '',
//    'EmpDetails': '',
//};
//ValidationMessageForTeam = {
//    'teamName': {
//        'required': 'Team Name is required.',
//    },
//    'teamManager': {
//        'required': 'Team Manager Name is required.',
//    },
//    'EmpDetails': {
//        'required': 'At least one Employee Details is required.',
//    },
//}
//} 
//# sourceMappingURL=CustomerComponent.js.map