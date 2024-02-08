import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  count:number;
  btnText:string;
  text:string;
  myImage:string;
  constructor(){
    this.count=4;
    this.text='abc@gmail.com';
    this.btnText='My Button';
    this.myImage='./assets/angular.png';
  }
  getSum(a:number,b:number){
    return a+b;
  }
}
