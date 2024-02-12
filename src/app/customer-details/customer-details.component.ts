import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../service/backend-service.service';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private backendService:BackendServiceService,private router:Router){}

  ngOnInit(): void {
    this.getAllEmployees();
  }
  customers:Array<Customer>=[];

   getAllEmployees(){
    this.backendService.getCustomers().subscribe((data: Array<Customer>) => {
        this.customers =  data;
        console.log(data);
    });

  }
  updateCust(id:number){
   // alert(id);
    this.router.navigate(['/UpdateCustomer',id]);
  }

  deleteCust(id:number){
    this.backendService.deleteCustomer(id).subscribe(data=>{
      console.log(data);
      this.getAllEmployees();
    })
  }
 

}
