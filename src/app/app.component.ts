import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Budget Tracker';
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
    // this.testAPI();
  } 
  
  testAPI(){
    const api = this.apiUrl + '/auth/test';
    this.http.get(api).subscribe((res) => {
      console.log(res);
      console.log(JSON.stringify(res));
    });
  }

}
