import { Component } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrl: './display-employees.component.css'
})
export class DisplayEmployeesComponent {

  showme?:boolean;
  employees:Array<Employee>=[];

  constructor(){
    this.employees=[new Employee(123,"mala",10000),new Employee(124,"kala",134000),new Employee(125,"raja",67000)];
  }
}
