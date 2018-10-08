import { Component,OnInit,ViewChild } from "@angular/core";
import { Customer } from "../Model/Customer";
//import { FormGroup,FormControl,Validators } from "@angular/forms";
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl } from "@angular/forms";
import { CountryStateService } from "../Services/CountryStateService";
import { Country } from "../Model/Country";
import { UserService } from "../Services/UserService";
import { Global } from "../Global/Global";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,DefaultUrlSerializer } from '@angular/router';
import { TableComponent } from '../Component/TableComponent';
import { LoaderService } from '../Services/SpinnerServices';
//import { MessageBox, MessageBoxButton, MessageBoxStyle } from '../Component/MessageBox';
//import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { AuthService } from '../Component/AuthService';
import { ValidationService } from '../Services/ValidationService';
import { ControlMessages} from '../Services/ControlMessage';

@Component({
    templateUrl: `../UI/Customer.html?v=${new Date().getTime()}`,
    styles: [`
        input.ng-invalid{border-left:5px solid red;}
        input.ng-valid{border-left:5px solid green;}
        `]
})
export class CustomerComponent implements OnInit {

      
    //formData: any;
    //customerobj: Customer = new Customer();
    @ViewChild(TableComponent) private TableComponent: TableComponent;
    @ViewChild(ControlMessages) private ControlMessages: ControlMessages;
    //constructor() {
    //    this.customerobj.CustomerId = "1";
    //    this.customerobj.CustomerName = "Amit";
    //    this.customerobj.CustomerAmount = 100
    //}

    userForm: FormGroup;
    serviceObj: CountryStateService;
    userserviceobj: UserService;
    customer : Customer[];

    countries: Country[];
    SelectedCountry: number
    

    constructor(private _formBuilder: FormBuilder, private _service: CountryStateService, private _userService: UserService, private _router: Router, private loaderService: LoaderService, private validationService: ValidationService,private authservice:AuthService)
    {   
       
        this.serviceObj = _service;
        this.countries = this.serviceObj.getCountries();
        this.LoadCustomer(); 
      //  this.loaderService.display(false);

    }
    ngOnInit(): void {
       
        this.userForm = this._formBuilder.group({
            //name: ['Amit', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
            //name: ['Amit', [Validators.required]],
            email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],           
                street: [],
                city: [],
                postalcode: [null, Validators.pattern('^[1-9][0-9]{4}$')],
                SelectedCountry: ['', Validators.required]              
          
               
        })
        
    }

    LoadCustomer(): void {        
      //  this.loaderService.display(true);
        this._userService.GetData(Global.GetBASE_URL).subscribe(
            customer => { this.customer = customer, console.log(customer);
            },            
                 error => <any>error)
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
        //ValidationService.validateForm(this.userForm);         
       // const controls = this.userForm;
       // this.ControlMessages.control();
        let serializer = new DefaultUrlSerializer();
        debugger;
      //  let a = serializer.serialize(this.userForm);
        this._userService.PostData(Global.BASE_URL, formData._value).subscribe(
            data => {
               // alert("Success");
                if (data == 1)// success
                {
                    //MessageBox.show(this.dialog, "", "hi", "Erw", MessageBoxButton.ok, false,44,"350px");
                    formData.reset();
                    
                }
                else {
                    this.LoadCustomer();
                    console.log(data);
                }

            },
            error => {
                alert("error");
                console.log(error);
            }
        );       
        
    }

    resetForm(form: FormGroup) {
        for (var name in form.controls) {
            // ValidationService.form.controls[name].updateValue('');
            form.controls[name].setErrors(null);
            form.controls[name].reset();
            //form.controls[name].
        }
    }


    onReset(FormData: any) {
        ValidationService.resetForm(FormData);
    }
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
        //
       //         },
       //         error => {

       //         }
       //         );
   

    editUser(id: number) {        
        this._router.navigate(['/Edit'], { queryParams: { Id: id, 'price-range': 'not-cheap' } });
    }
    //<a[routerLink]="['/products']"[queryParams] = "{ order: 'popular'}" >
    //Products
    //< /a>
    //editUser(id: number) {
    //    this._router.navigate(['/Edit', id], { queryParamsHandling: 'preserve' });
    //}

    //goProducts() {
    //    this._router.navigate(['/products'], { queryParams: { order: 'popular' } });
    //     ////http://localhost:4200/products?order=popular
    //}
   

    //go1Products() {
    //    this._router.navigate(['/products'], { queryParams: { order: 'popular', 'price-range': 'not-cheap' } });
    //   // http://localhost:4200/products?order=popular&price-range=not-cheap
    //}
}


//// Final Submit 
//FinalSubmit() {           
//    this.Mainerrors = [];
//    const controls = this.teamForm;
//    for (const field in controls.controls) {
//        const a = this.teamForm.get(field);
//        this.TeamFormError[field] = '';
//        if (!a.valid) {
//            const message = this.ValidationMessageForTeam[field];
//            for (const key in a.errors) {
//                this.TeamFormError[field] += message[key];
//                this.Mainerrors.push(this.TeamFormError[field]);
//            }
//        }
//    }
//    if (this.team.employees.length == 0) {
//        const message = this.ValidationMessageForTeam['EmpDetails'];
//        this.Mainerrors.push(message['required']);
//    }
//    if (this.errors.length == 0) {
//        let i = JSON.stringify(this.team);
//        console.log(i);
//    }
//}
//onReset() {
//    this.team.employees = [];
//    this.team.TeamManagerName = "";
//    this.team.TeamName = "";
//    this.Mainerrors = [];
//}

//// Search On Change
//onChange() {
//    this.SearchTeamAndEmp(1);
//}

////Country Change Event
//CountryDropdown(CountryID: number) {           
//    if (CountryID == 3) {
//        this.IshideShow = true;
//        this.teamForm.get('EmpDetails').get("otherCountry").setValidators(Validators.required);
//    }
//    else {
//        this.IshideShow = false;
//        this.teamForm.get('EmpDetails').get("otherCountry").clearValidators();
//    }
//    this.teamForm.get('EmpDetails').get("otherCountry").updateValueAndValidity();
//}


///// search team and Employee Details

//SearchTeamAndEmp(id: number) {         
//    this._userService.get(Global.TeamDetails).subscribe(team => {
//        this.team = team.data;
//        sessionStorage.setItem("team", team.data);
//    });
//}
///// Validation Message for Employees
//EmpFormError = {
//    'empId': '',
//    'empName': ''
//    //'country': '',
//    //'otherCountry':''
//};
//validationMessageforEmp = {
//    'empId': {
//        'required': 'Id is required.',
//    },
//    'empName': {
//        'required': 'Name is required.',
//        'minlength': 'Name should be 4 Characters.'
//    },
//    //'country': {
//    //    'required': 'Country is required.',
//    //},
//    //'otherCountry': {
//    //    'required': 'Other Country Name is required.',
//    //},
//}
//// Validation Message for Team 
//TeamFormError = {
//    'teamName': '',
//    'teamManager': '',
//    'EmpDetails': '',
//};
//ValidationMessageForTeam = {
//    'teamName': {
//        'required': 'Team Name is required.',
//    },
//    'teamManager': {
//        'required': 'Team Manager Name is required.',
//    },
//    'EmpDetails': {
//        'required': 'At least one Employee Details is required.',
//    },
//}
//}