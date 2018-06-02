import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CustomerComponent } from "../Component/CustomerComponent";
import { CountryStateService } from "../Services/CountryStateService";
import { UserService } from "../Services/UserService";
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../Module/Routing';
import { APP_BASE_HREF } from '@angular/common';
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
//import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@NgModule({
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, CountryStateService, UserService, ValidationService, LoaderService, AuthService],
   // providers: [CountryStateService,UserService],
    imports: [AppRoutingModule,BrowserModule, ReactiveFormsModule, HttpModule ,FormsModule],
    declarations: [CustomerComponent, MasterPageComponent, EditComponent, LoginComponent, ControlMessages, TableComponent, HeaderComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModule {

}