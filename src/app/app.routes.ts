import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './features/user/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    { path : 'login', component : LoginComponent},
    { path : 'home', component : HomeComponent},
    { path : 'admin' , component : AdminDashboardComponent},
    { path : 'user' , component : UserDashboardComponent},
    { path : '', redirectTo: '/login', pathMatch: 'full'},
];
