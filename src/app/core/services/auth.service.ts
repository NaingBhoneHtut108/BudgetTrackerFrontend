import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  apiUrl: string = environment.apiUrl;

  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  goLogin(credentials : {email: string , password: string}) : Promise <{message : string ,data : any}> {
    var result = {message:"FAIL",data:{}};
    return new Promise((resolve , reject) => {
      this.http.post(this.apiUrl + "/auth/login", credentials).subscribe( (data: any) => {
        localStorage.setItem('token',data.token);
        this.userSubject.next(data);
        console.log(JSON.stringify(data));
        result.message = "SUCCESS";
        result.data = data;
        resolve({message: 'SUCCESS', data})
      } , (error) => {  
        console.log(error);
        result.message = "FAIL";
        result.data = error;
        reject({message: 'FAIL', data:{}})
      } );
    })    
  }

  logout(){
    localStorage.removeItem('token')
    this.userSubject.next(null);
  }

  setUser(user: any){
    this.userSubject.next(user);
  }

  isAuthenticated() : boolean {
    return !!localStorage.getItem('token');
  }

}
