import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {

        let logged = this.accountService.isLogged();
        if (logged) {
            return true;
        }
        this.router.navigate(["login"]);

        return false;
    }
}



