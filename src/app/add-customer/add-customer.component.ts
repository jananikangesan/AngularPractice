import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendServiceService } from '../service/backend-service.service';
import { Customer } from '../model/customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit{

  @ViewChild('myForm') myForm!: NgForm;
  
  constructor(private backendService:BackendServiceService){}
  msg?: string;
  
  ngOnInit(): void {
    this.myFunction;
  }

  public myFunction(cust : Customer){
   
    this.backendService.addCustomer(cust).subscribe(response => {
      this.msg = 'saved product with Id '+response.id;
      console.log(response);
     },
     (error) => {
      this.msg='error with product'+error
      console.log(error)
            },
      )
      this.myForm.resetForm();
  }
}
