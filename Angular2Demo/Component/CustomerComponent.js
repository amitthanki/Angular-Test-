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
var Country_1 = require("../Model/Country");
var UserService_1 = require("../Services/UserService");
var Global_1 = require("../Global/Global");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var CustomerComponent = (function () {
    function CustomerComponent(_formBuilder, _service, _userService) {
        this._formBuilder = _formBuilder;
        this._service = _service;
        this._userService = _userService;
        this.serviceObj = null;
        this.userserviceobj = null;
        this.SelectedCountry = new Country_1.Country(0, 'ondia');
        this.serviceObj = _service;
        this.countries = this.serviceObj.getCountries();
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            name: ['Amit', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            email: [],
            street: [],
            city: [],
            postalcode: [null, forms_1.Validators.pattern('^[1-9][0-9]{4}$')]
            //SelectedCountry: []
        });
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
        this._userService.PostData(Global_1.Global.BASE_URL, formData._value).subscribe(function (data) {
            alert("hi");
            if (data == 1) {
            }
            else {
                console.log(data);
            }
        }, function (error) {
            console.log(error);
        });
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
        //         },
        //         error => {
        //         }
        //         );
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: "customer-ui",
        templateUrl: "../UI/Customer.html",
        styles: ["\n        input.ng-invalid{border-left:5px solid red;}\n        input.ng-valid{border-left:5px solid green;}\n        "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, CountryStateService_1.CountryStateService, UserService_1.UserService])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map