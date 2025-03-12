import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

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
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router : Router){
    this.testAPI();
  }

  testAPI(){
    console.log("Calling API")
    this.http.get(this.apiUrl + '/test').subscribe(
      data=> {
        console.log(JSON.stringify(data));
      },
      error=>{
        console.log("Failed To Call API : " + JSON.stringify(error));
      }
    )
  }

  signUp(){
    console.log("Username : " + this.username);
    console.log("Email : " + this.email);
    console.log("Password : " + this.password);
    var requestData : any  = {'username' : this.username, 'email' : this.email, 'password' : this.password};
    // this.http.post(this.apiUrl + '/user/singup',requestData).subscribe(
    //   data => {
    //     console.log("Signed Up Successful");
    //   },
    //   error => {
    //     // Handle Error
    //   }
    // )
    // TODO : call API
  }

  goToLogin(){
    this.router.navigate(['/auth/login']);
  }

}
