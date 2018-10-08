import { Injectable,ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    isUserLogged: boolean = false;
    private loginurl: string = '/Login';
    private setRedirecturl: string = '/';

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }

    login() {
        this.loggedIn.next(true);
        this.isUserLogged = true;
           // this.router.navigate(['/']);
    }

    isUserLoggedIn(): boolean {
        return this.isUserLogged;
    }

    getLoginurl(): string {
        return this.loginurl;
    }

    getRedirecturl(): string {
        return this.setRedirecturl;
    }
}