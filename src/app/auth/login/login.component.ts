import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = "";
  password : string = "";

  constructor(private authService: AuthService, private router: Router, private toastr : ToastrService){
  }

  async login() {
    try {
      const result = await this.authService.goLogin({ email: this.email, password: this.password });
      this.showToast('Login Successful', 'success');
      this.router.navigate(['/user']);
    } catch (error) {
      this.showToast('Invalid Credentials', 'error');
    }
  }

  showToast(message : string , type: 'success' | 'error'){
    if (type === 'success'){
      this.toastr.success(message, 'Success');
    } else if ( type === 'error'){
      this.toastr.error(message, 'Error');
    } else { 
      this.toastr.info(message, '');
    }
  }

  goToSignUp(){
    this.router.navigate(["/auth/signup"]);
  }

}
