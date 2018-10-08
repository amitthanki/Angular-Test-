import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { UserService } from "../Services/UserService";
import { Global } from "../Global/Global";
import { Customer } from "../Model/Customer";
import { CountryStateService } from "../Services/CountryStateService";
import { Country } from "../Model/Country";


@Component({
    templateUrl: `../UI/Edit.html?v=${new Date().getTime()}`,
    styles: [`
        input.ng-invalid{border-left:5px solid red;}
        input.ng-valid{border-left:5px solid green;}
        `]
     
})
export class EditComponent implements OnInit {
    customer: Customer = new Customer;
    userForm: FormGroup;
    serviceObj: CountryStateService;
    countries: Country[];
    SelectedCountry: number = 1;
    constructor(private _formBuilder: FormBuilder, private _service: CountryStateService, private _route: ActivatedRoute, private _location: Location, private _UserService: UserService) {
        this.serviceObj = _service;
        this.countries = this.serviceObj.getCountries();
    }
    ngOnInit(): void {
        this.userForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            email: [],
            street: [],
            city: [],
            postalcode: [null, Validators.pattern('^[1-9][0-9]{4}$')],
            SelectedCountry: 1


        })
        this.getCustomerByID();
    }

    getCustomerByID() {

        //Edit/1
        //this._route.params.switchMap((params: Params) => this._UserService.GetDataByID(Global.GetDataByID, +params['id'])).subscribe(
        //    customer => {
        //        this.customer = customer, console.log(customer);
        //    },
        //    error => <any>error)

        let id = this._route.snapshot.queryParams['Id'];
        this._UserService.GetDataByID(Global.GetDataByID, id).subscribe(
            cust => {
                this.customer = cust
                
            })
       

        //this._route.queryParam.fi ((params: Params) => this._UserService.GetDataByID(Global.GetDataByID, +params['id'])).subscribe(
        //    customer => {
        //        this.customer = customer, console.log(customer);
        //    },
        //    error => <any>error)
     }

}