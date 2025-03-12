import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './features/user/user-dashboard/user-dashboard.component';
import { SignupComponent } from './auth/signup/signup/signup.component';

export const routes: Routes = [
    { path : 'auth', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)},
    { path : 'home', component : HomeComponent},
    { path : 'admin' , component : AdminDashboardComponent},
    { path : 'user' , component : UserDashboardComponent},
    { path : '', redirectTo: '/auth/login', pathMatch: 'full'},
];
