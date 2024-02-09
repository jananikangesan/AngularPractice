import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DisplayEmployeesComponent } from './display-employees/display-employees.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

const routes: Routes = [
  {path:'TwoWaydemo',component:TwoWayBindingComponent},
  {path:'ShowEmployee',component:DisplayEmployeesComponent},
  {path:'PipeDemo',component:PipesDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
