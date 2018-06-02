"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var EditComponent_1 = require("../Component/EditComponent");
var LoginComponent_1 = require("../Component/LoginComponent");
var core_1 = require("@angular/core");
var appRoutes = [
    { path: 'UI/Index.html', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent_1.LoginComponent },
    { path: 'Edit/:id', component: EditComponent_1.EditComponent },
    { path: 'home', component: CustomerComponent_1.CustomerComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=Routing.js.map