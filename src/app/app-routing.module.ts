import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DisplayEmployeesComponent } from './display-employees/display-employees.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path:'TwoWaydemo',component:TwoWayBindingComponent},
  {path:'ShowEmployee',component:DisplayEmployeesComponent},
  {path:'PipeDemo',component:PipesDemoComponent},
  {path:'Backend',component:CustomerDetailsComponent},
  {path:'AddCustomer',component:AddCustomerComponent},
  {path:'UpdateCustomer/:id',component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
