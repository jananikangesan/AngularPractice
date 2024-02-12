import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../service/backend-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  id!:number;
  cust: Customer = { id: 0, name: '', salary: 0, dob: new Date(), email: '' };

  constructor(private backendService:BackendServiceService, private route:ActivatedRoute, private router:Router){
   
  }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];

   this.backendService.getCustomerById(this.id).subscribe(data=>{
    this.cust=data;
   },error=>console.log(error));
  }

  myUpdate(){
    this.backendService.updateCustomer(this.id,this.cust).subscribe(data=>{
      this.gotoCustomerList();
    },error=>console.log(error));
  }
  gotoCustomerList(){
    this.router.navigate(['/Backend']);
  }

}
