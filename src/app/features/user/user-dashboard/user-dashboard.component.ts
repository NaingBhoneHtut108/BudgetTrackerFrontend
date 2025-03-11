import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  user : any;
  
  constructor(private authService : AuthService){

  }

  ngOnInit(){
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }



}
