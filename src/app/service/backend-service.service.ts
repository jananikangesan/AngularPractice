import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  baseURL: string = "http://localhost:8098";
  
  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.baseURL}/customer/all`);
  }

  addCustomer(cust :Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.baseURL}/customer/addCustomer`,cust);
  }

 
}
