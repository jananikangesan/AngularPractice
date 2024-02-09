import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../service/backend-service.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private backendService:BackendServiceService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }
  customers:Array<Customer>=[];

  public  getAllEmployees(){
    this.backendService.getCustomers().subscribe((data: Array<Customer>) => {
        this.customers =  data;
        console.log(data);
    });

  }

}
