import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/header/header/header.component";
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  user : any;
  
  constructor(private authService : AuthService, private router : Router){

  }

  ngOnInit(){
    this.authService.user$.subscribe(
      (user) => {
        if(user){
          this.user = user;
        } else {
          this.router.navigate(['/auth/login']);    
        }
    },
    (error) => {
      this.router.navigate(['/auth/login']);
    }
    );
  }



}
