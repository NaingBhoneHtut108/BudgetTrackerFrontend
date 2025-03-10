import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})

export class adminGuard implements CanActivate{
  constructor(private authService: AuthService,private router: Router){  

  }

  canActivate(): boolean {
    if(this.authService.isAdmin()){
      return true;
    }
    this.router.navigate(['/user'])
    return false;
  }


}