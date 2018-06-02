import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { UserService } from "../Services/UserService";
import { Global } from "../Global/Global";
import { Customer } from "../Model/Customer";

@Component({
    templateUrl: "../UI/Edit.html",
    styles: [`
        input.ng-invalid{border-left:5px solid red;}
        input.ng-valid{border-left:5px solid green;}
        `]
})
export class EditComponent implements OnInit {
    customer: Customer = new Customer;
    userForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,private _route: ActivatedRoute, private _location: Location, private _UserService: UserService) {
        
    }
    ngOnInit(): void {
        this.userForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            email: [],
            street: [],
            city: [],
            postalcode: [null, Validators.pattern('^[1-9][0-9]{4}$')],
            SelectedCountry: 0


        })
        this.getCustomerByID();
    }

    getCustomerByID() {
        this._route.params.switchMap((params: Params) => this._UserService.GetDataByID(Global.GetDataByID, +params['id'])).subscribe(
            customer => {
                this.customer = customer, console.log(customer);
            },
            error => <any>error)
     }

}