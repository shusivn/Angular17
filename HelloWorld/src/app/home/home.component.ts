import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public name = 'Lộc Ngô';
  public age = 17.091834646;
  public thuonghieus =[
    'Toyota', 'Honda', 'Ford', 'Audi'
  ];
  public tangTuoi() {
    this.age++;
    // if(this.age===20){
      // this.name = "Hi hi ha ha";
    // }
    this.thuonghieus.push(this.name + ' ' + this.age)
  }
}
