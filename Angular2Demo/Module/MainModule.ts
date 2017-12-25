import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CustomerComponent } from "../Component/CustomerComponent";
import { CountryStateService } from "../Services/CountryStateService";
import { UserService } from "../Services/UserService";
import { HttpModule } from '@angular/http';

@NgModule({
    providers: [CountryStateService],
    imports: [BrowserModule, ReactiveFormsModule, HttpModule ],
    declarations: [CustomerComponent],
    bootstrap: [CustomerComponent]
})
export class MainModule {

}