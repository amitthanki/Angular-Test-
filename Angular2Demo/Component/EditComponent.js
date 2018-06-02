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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var UserService_1 = require("../Services/UserService");
var Global_1 = require("../Global/Global");
var Customer_1 = require("../Model/Customer");
var EditComponent = (function () {
    function EditComponent(_formBuilder, _route, _location, _UserService) {
        this._formBuilder = _formBuilder;
        this._route = _route;
        this._location = _location;
        this._UserService = _UserService;
        this.customer = new Customer_1.Customer;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            email: [],
            street: [],
            city: [],
            postalcode: [null, forms_1.Validators.pattern('^[1-9][0-9]{4}$')],
            SelectedCountry: 0
        });
        this.getCustomerByID();
    };
    EditComponent.prototype.getCustomerByID = function () {
        var _this = this;
        this._route.params.switchMap(function (params) { return _this._UserService.GetDataByID(Global_1.Global.GetDataByID, +params['id']); }).subscribe(function (customer) {
            _this.customer = customer, console.log(customer);
        }, function (error) { return error; });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    core_1.Component({
        templateUrl: "../UI/Edit.html",
        styles: ["\n        input.ng-invalid{border-left:5px solid red;}\n        input.ng-valid{border-left:5px solid green;}\n        "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, common_1.Location, UserService_1.UserService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=EditComponent.js.map