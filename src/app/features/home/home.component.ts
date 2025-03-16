import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header/header.component";
import { SHARED_IMPORTS } from '../../shared/shared-imports';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SHARED_IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName: string = 'John Doe'; // Replace with dynamic data from a service
  userRole: string = 'User'; // Replace with dynamic data from a service

  // Budget Summary Data
  totalIncome: number = 5000;
  totalExpenses: number = 3000;
  remainingBalance: number = this.totalIncome - this.totalExpenses;

  // Recent Transactions Data
  recentTransactions = [
    { date: new Date(), description: 'Grocery Shopping', amount: 150, type: 'Expense' },
    { date: new Date(), description: 'Salary', amount: 5000, type: 'Income' },
    { date: new Date(), description: 'Internet Bill', amount: 50, type: 'Expense' },
  ];
}
