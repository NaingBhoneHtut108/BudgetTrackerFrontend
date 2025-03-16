import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http: HttpClient, private router : Router,private toastr: ToastrService) {
  }

  signUp(){
    var requestData : any  = {'username' : this.username, 'email' : this.email, 'password' : this.password};
    this.http.post(this.apiUrl + '/user/signup',requestData).subscribe(
      (data) => {
        this.toastr.success('User Created Successfully', 'Success');
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        this.toastr.error('Error Occured. Please contact to developers.', 'Error');
        console.log(error);
      }
    )
  }

  goToLogin(){
    this.router.navigate(['/auth/login']);
  }

}
