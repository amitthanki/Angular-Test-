import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../Component/AuthService';

@Component({
    selector: "header-UI",
    templateUrl: "../UI/Header.html",
})

export class HeaderComponent {

    isLoggedIn$: Observable<boolean>;                  

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn; 
    }


            

}