import { Component, model } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router : Router){
  }

  loginAsAdmin(){
    console.log("Login")
    this.authService.login('admin');
    this.router.navigate(['/admin']);
  }

  loginAsUser(){
    this.authService.login('user');
    this.router.navigate(['/user']);
  }

  goSignup(){
    console.log("Going To Sign Up Page");
    this.router.navigate(['/signup'])
  }

  count = model<number>(0);
  updateCount(amount: number): void {
    this.count.update(currentCount => currentCount + amount);
  }


}
