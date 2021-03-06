﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "../Component/CustomerComponent";
import { CountryStateService } from "../Services/CountryStateService";
import { EditComponent } from '../Component/EditComponent';
import { LoginComponent } from '../Component/LoginComponent';
import { NgModule } from '@angular/core';
import { MasterPageComponent } from "../Component/MasterPageComponent";
import { AuthGuardService } from "../Component/AuthGuardService";
import { HeaderComponent } from '../Component/HeaderComponent';

const appRoutes: Routes = [
    { path: 'UI/Index.html', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    //{ path: 'Edit/:id', component: EditComponent },
    { path: 'Edit', component: EditComponent, canActivate: [AuthGuardService]},
    { path: 'home', component: CustomerComponent ,canActivate: [AuthGuardService]}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { } 