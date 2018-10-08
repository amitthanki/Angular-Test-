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
var forms_1 = require("@angular/forms");
var ValidationService_1 = require("./ValidationService");
var ControlMessages = (function () {
    function ControlMessages() {
        this.label = '';
    }
    Object.defineProperty(ControlMessages.prototype, "errorMessage", {
        get: function () {
            console.log(this.control);
            if (typeof this.control != 'undefined') {
                for (var propertyName in this.control.errors) {
                    if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                        return ValidationService_1.ValidationService.getValidatorErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
                    }
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlMessages;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], ControlMessages.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ControlMessages.prototype, "label", void 0);
ControlMessages = __decorate([
    core_1.Component({
        selector: 'control-messages',
        template: "<div class=\"text-danger\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ControlMessages);
exports.ControlMessages = ControlMessages;
//# sourceMappingURL=ControlMessage.js.map