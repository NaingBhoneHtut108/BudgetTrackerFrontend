import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : '', redirectTo : '/login' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
