import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrl: './display-employees.component.css'
})
export class DisplayEmployeesComponent implements OnInit {

  //showme?:boolean;
  employees:Array<Employee>=[];

  // constructor(){
  //   this.employees=[new Employee(123,"mala",10000),new Employee(124,"kala",134000),new Employee(125,"raja",67000)];
  // }

  constructor(private empService: EmployeeServiceService) {

  }
  
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employees = this.empService.display();
  }
}
