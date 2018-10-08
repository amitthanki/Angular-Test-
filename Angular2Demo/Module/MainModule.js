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
var Routing_1 = require("../Module/Routing");
var common_1 = require("@angular/common");
var MasterPageComponent_1 = require("../Component/MasterPageComponent");
var EditComponent_1 = require("../Component/EditComponent");
var forms_2 = require("@angular/forms");
var LoginComponent_1 = require("../Component/LoginComponent");
var ValidationService_1 = require("../Services/ValidationService");
var ControlMessage_1 = require("../Services/ControlMessage");
var TableComponent_1 = require("../Component/TableComponent");
var SpinnerServices_1 = require("../Services/SpinnerServices");
var HeaderComponent_1 = require("../Component/HeaderComponent");
var AuthService_1 = require("../Component/AuthService");
var AuthGuardService_1 = require("../Component/AuthGuardService");
//import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
//import { DataTableModule } from 'primeng/primeng';
//import { TableModule } from 'primeng/table';
//import { TableModule } from 'primeng/components/table/table';
//import { AgGridModule } from "ag-grid-angular/main";
//import "ag-grid-enterprise/";
var app_paginationComponent_1 = require("../Component/app.paginationComponent");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        declarations: [CustomerComponent_1.CustomerComponent, MasterPageComponent_1.MasterPageComponent, EditComponent_1.EditComponent, LoginComponent_1.LoginComponent, ControlMessage_1.ControlMessages, TableComponent_1.TableComponent, HeaderComponent_1.HeaderComponent, app_paginationComponent_1.Pagination],
        imports: [common_1.CommonModule, Routing_1.AppRoutingModule, platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, forms_2.FormsModule],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, CountryStateService_1.CountryStateService, UserService_1.UserService, ValidationService_1.ValidationService, SpinnerServices_1.LoaderService, AuthService_1.AuthService, AuthGuardService_1.AuthGuardService],
        // providers: [CountryStateService,UserService],   
        bootstrap: [MasterPageComponent_1.MasterPageComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=MainModule.js.map