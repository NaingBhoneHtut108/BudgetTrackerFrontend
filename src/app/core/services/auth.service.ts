import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(credentials : {email: string , password: string}){
    // TODO : Call Login API 
    // TODO : Nav to ADMIN / USER / SHOW MESSAGE
  }

  logout(){
    localStorage.removeItem('token')
    this.userSubject.next(null);
  }

  setUser(user: any){
    this.userSubject.next(user);
  }

}
