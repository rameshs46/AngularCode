import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  age: number = 39; // API, Service
  height: number = 100;
  width: number = 30;
  name: string;
  //name?: string; //Union Type Name
  constructor() {
    this.name = 'Rakshana Ramesh';
  }

  sayHello(): void {
    this.name = 'Ramesh Sengamalai';
  }
}
