import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employers',
  imports: [CommonModule],
  templateUrl: './employers.html',
  styleUrl: './employers.css'
})
export class EmployersComponent {

  employers: Employee[] = [];

  constructor(){
    this.employers = [
      { id: 1, name: 'Hartford Maryann', username: 'hartfordmaryann', password: 'lovingkittens', position: 'TypeScript Developer', salary: 1000000, rating: 4.5 },
      { id: 2, name: 'Smith John', username: 'smithjohn', password: 'ilovecoding', position: 'Java Developer', salary: 900000 , rating: 7.8},
      { id: 3, name: 'Doe Jane', username: 'doejane', password: 'angularrocks', position: 'Angular Developer', salary: 950000, rating: 2.3 }
    ];
  }
}
