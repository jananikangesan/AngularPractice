import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent implements OnInit {

  principal:number=0;
  time:number=0;
  rate:number=0;
  interest:number=0;

  constructor(){

  }
  ngOnInit(): void {}

  simpleIntrest():void{
    console.log("Calculating simple interest...");
    this.interest=(this.principal*this.time*this.rate)/100;
    alert(this.interest);
  }
}
