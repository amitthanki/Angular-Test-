"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AuthService = (function () {
    function AuthService() {
        this.loggedIn = new BehaviorSubject_1.BehaviorSubject(false);
        this.isUserLogged = false;
        this.loginurl = '/Login';
        this.setRedirecturl = '/';
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this.loggedIn.next(true);
        this.isUserLogged = true;
        // this.router.navigate(['/']);
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return this.isUserLogged;
    };
    AuthService.prototype.getLoginurl = function () {
        return this.loginurl;
    };
    AuthService.prototype.getRedirecturl = function () {
        return this.setRedirecturl;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map