import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes : Routes = [
  { path : '' , component : AdminDashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
