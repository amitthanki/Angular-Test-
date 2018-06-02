import { Component, OnInit } from '@angular/core';
import { UserService } from "../Services/UserService";
import { Global } from "../Global/Global";
import { Customer } from "../Model/Customer";
import { Router } from '@angular/router';
import { AuthService} from '../Component/AuthService';

@Component({
    moduleId: module.id,
    templateUrl: "../UI/Login.html"

})

export class LoginComponent implements OnInit {
    model: any = {};
    customer: Customer = new Customer();
    loggedIn = false;

    constructor(private _Userservices: UserService, private _router: Router, private authService: AuthService) {

    }
    ngOnInit(): void {    
        
    }

    //login() {      
    //    this._Userservices.GetDataByID(Global.GetDataByID, 1).subscribe(
    //        customer => {
    //            this.customer = customer,
               
    //            //localStorage.setItem('sessionID', btoa(JSON.stringify(this.customer))); // Encryption
    //            //console.log(atob(localStorage.getItem('sessionID'))) //Decryption
    //            localStorage.setItem('sessionID', JSON.stringify('Amit')); // Encryption             
    //            this._router.navigate(['/home']);
    //        }
       
    //    )
    //}


    ///
    login() {
        this.authService.login();
        this._router.navigate(['/home']);
    }

    
}
