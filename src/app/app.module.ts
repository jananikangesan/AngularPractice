import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { DisplayEmployeesComponent } from './display-employees/display-employees.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { EmployeeServiceService } from './service/employee-service.service';
import { BackendServiceService } from './service/backend-service.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    DisplayEmployeesComponent,
    TwoWayBindingComponent,
    PipesDemoComponent,
    CustomerDetailsComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    EmployeeServiceService,
    BackendServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
