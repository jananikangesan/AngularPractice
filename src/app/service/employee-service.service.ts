import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  details: Array<Employee> = [];
  constructor() { 
    this.details=[new Employee(1231,"mala",10000),new Employee(1241,"kala",134000),new Employee(1251,"raja",67000)];

  }

  display() {
    return this.details;
  }
}
