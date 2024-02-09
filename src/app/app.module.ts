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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    DisplayEmployeesComponent,
    TwoWayBindingComponent,
    PipesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    EmployeeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
