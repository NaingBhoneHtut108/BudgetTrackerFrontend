import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username : string = "";
  email : string = "";
  password : string = "";

  constructor(private http: HttpClient, private router : Router){

  }

  signUp(){
    console.log("Username : " + this.username);
    console.log("Email : " + this.email);
    console.log("Password : " + this.password);
    
    // TODO : call API
  }

  goToLogin(){
    this.router.navigate(['/auth/login']);
  }

}
