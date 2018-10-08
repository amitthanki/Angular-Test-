import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CustomerComponent } from "../Component/CustomerComponent";
import { CountryStateService } from "../Services/CountryStateService";
import { UserService } from "../Services/UserService";
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../Module/Routing';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MasterPageComponent } from "../Component/MasterPageComponent";
import { EditComponent } from "../Component/EditComponent";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../Component/LoginComponent';
import { ValidationService } from '../Services/ValidationService';
import { ControlMessages } from '../Services/ControlMessage';
import { TableComponent } from '../Component/TableComponent';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoaderService } from '../Services/SpinnerServices';
import { HeaderComponent } from '../Component/HeaderComponent';
import { AuthService } from '../Component/AuthService';
import { AuthGuardService } from '../Component/AuthGuardService';
//import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
//import { DataTableModule } from 'primeng/primeng';
//import { TableModule } from 'primeng/table';
//import { TableModule } from 'primeng/components/table/table';
//import { AgGridModule } from "ag-grid-angular/main";
//import "ag-grid-enterprise/";

import {Pagination} from '../Component/app.paginationComponent';

@NgModule({
    declarations: [CustomerComponent, MasterPageComponent, EditComponent, LoginComponent, ControlMessages, TableComponent, HeaderComponent, Pagination],
    imports: [CommonModule, AppRoutingModule, BrowserModule, ReactiveFormsModule, HttpModule, FormsModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, CountryStateService, UserService, ValidationService, LoaderService, AuthService, AuthGuardService],
    // providers: [CountryStateService,UserService],   
    
    bootstrap: [MasterPageComponent]
})
export class MainModule {

}