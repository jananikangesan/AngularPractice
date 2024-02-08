import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  message='Hello world';
  d=new Date();
  id=123;
  myimage='./assets/flower.jpg';
}
