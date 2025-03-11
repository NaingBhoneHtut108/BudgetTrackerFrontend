import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BudgetServiceService {

  private budgetSubject = new BehaviorSubject<any[]>([]);
  public budgets$ = this.budgetSubject.asObservable();

  constructor(private http : HttpClient) { }

  fetchBudget(){
    // TODO : Get Budget 
  }

}
