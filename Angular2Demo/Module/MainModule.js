"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var CountryStateService_1 = require("../Services/CountryStateService");
var UserService_1 = require("../Services/UserService");
var http_1 = require("@angular/http");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        providers: [CountryStateService_1.CountryStateService, UserService_1.UserService],
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
        declarations: [CustomerComponent_1.CustomerComponent],
        bootstrap: [CustomerComponent_1.CustomerComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=MainModule.js.map