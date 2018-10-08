import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../Component/AuthService';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authservice: AuthService, private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authservice.isUserLoggedIn()) {
            return true;
        }
        this.authservice.getRedirecturl()
        this._router.navigate([this.authservice.getLoginurl()])
       
    }
}