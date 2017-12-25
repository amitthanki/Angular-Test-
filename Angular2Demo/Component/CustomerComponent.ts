import { Component,OnInit } from "@angular/core";
import { Customer } from "../Model/Customer";
//import { FormGroup,FormControl,Validators } from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CountryStateService } from "../Services/CountryStateService";
import { Country } from "../Model/Country";
import { UserService } from "../Services/UserService";
import { Global } from "../Global/Global";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Component({
    selector: "customer-ui",
    templateUrl: "../UI/Customer.html",
    styles: [`
        input.ng-invalid{border-left:5px solid red;}
        input.ng-valid{border-left:5px solid green;}
        `]
})
export class CustomerComponent implements OnInit {
    //formData: any;
    //customerobj: Customer = new Customer();

    //constructor() {
    //    this.customerobj.CustomerId = "1";
    //    this.customerobj.CustomerName = "Amit";
    //    this.customerobj.CustomerAmount = 100
    //}

    userForm: FormGroup;
    serviceObj: CountryStateService = null;
    userserviceobj: UserService = null;
    

    countries: Country[];
    SelectedCountry : Country = new Country(0,'ondia');

    constructor(private _formBuilder: FormBuilder, private _service: CountryStateService, private _userService: UserService )
    {
        this.serviceObj = _service;
        this.countries = this.serviceObj.getCountries();         
    }
    ngOnInit() {
        this.userForm = this._formBuilder.group({
            name: ['Amit', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            email: [],           
                street: [],
                city: [],
                postalcode: [null, Validators.pattern('^[1-9][0-9]{4}$')]                
          
            //SelectedCountry: []
        })
    }
   /* userForm = new FormGroup({
        name: new FormControl('Amit', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
        email: new FormControl(),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
        })

    });*/

    onSubmit(formData: any) {       
        this._userService.PostData(Global.BASE_URL, formData._value).subscribe(
            data => {
                alert("hi");
                if (data == 1)// success
                {
                   
                }
                else {
                    console.log(data);
                }

            },
            error => {
                console.log(error);
            }
        );
        //console.log(this.userForm.value);

       // let body = JSON.stringify(formData._value);
       //console.log(body)

       //     let headers = new Headers({ 'Content-type': 'application/json' });
       //     let options = new RequestOptions({ headers: headers });
       //     return this._http.post(Global.BASE_URL, body, options)
       //         .map((response: Response) => <any>response.json()).
       //         subscribe(
       //         data => {
       //             //debugger;
       //             if (data == 1)// success
       //             {

       //             }
       //             else {

       //             }

       //         },
       //         error => {

       //         }
       //         );
    }
}