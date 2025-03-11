import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes:Routes= [
  { path: '', component : UserDashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
