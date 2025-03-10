import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})

export class userGuard implements CanActivate{

  constructor(private authService: AuthService, private router:Router){

  }

  canActivate(): boolean {
    if(this.authService.isAdmin()){
      return true;
    }
    this.router.navigate(['/admin'])
    return false;
  }
}


