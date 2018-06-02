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
var UserService_1 = require("../Services/UserService");
var Customer_1 = require("../Model/Customer");
var router_1 = require("@angular/router");
var AuthService_1 = require("../Component/AuthService");
var LoginComponent = (function () {
    function LoginComponent(_Userservices, _router, authService) {
        this._Userservices = _Userservices;
        this._router = _router;
        this.authService = authService;
        this.model = {};
        this.customer = new Customer_1.Customer();
        this.loggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //login() {      
    //    this._Userservices.GetDataByID(Global.GetDataByID, 1).subscribe(
    //        customer => {
    //            this.customer = customer,
    //            //localStorage.setItem('sessionID', btoa(JSON.stringify(this.customer))); // Encryption
    //            //console.log(atob(localStorage.getItem('sessionID'))) //Decryption
    //            localStorage.setItem('sessionID', JSON.stringify('Amit')); // Encryption             
    //            this._router.navigate(['/home']);
    //        }
    //    )
    //}
    ///
    LoginComponent.prototype.login = function () {
        this.authService.login();
        this._router.navigate(['/home']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "../UI/Login.html"
    }),
    __metadata("design:paramtypes", [UserService_1.UserService, router_1.Router, AuthService_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map