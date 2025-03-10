import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userRole: string = '';

  constructor(private router: Router) { }

  login(role: 'admin' | 'user'){
    localStorage.setItem('role',role);
    this.userRole = role;
  }

  logout(){
    this.userRole = '';
    localStorage.removeItem('role');
    this.router.navigate(['/auth/login']);
  }

  getRole(){
    return localStorage.getItem('role');
  }

  isAdmin(){
    return this.getRole() === 'admin';
  }

  isUser(){
    return this.getRole() === 'user';
  }

}
