import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { CommonModule } from '@angular/common';
import { MatTab } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

const employersData: Employee[] = [
    new Employee(1, 'Hartford Maryann', 'TypeScript Developer', 1000000, 'hartfordmaryann', 'lovingkittens', 4.5),
    new Employee(2, 'Smith John', 'Java Developer', 900000, 'smithjohn', 'ilovecoding', 7.8),
    new Employee(3, 'Doe Jane', 'Angular Developer', 950000, 'doejane', 'angularrocks', 2.3)
];


@Component({
  selector: 'app-employers',
  imports: [CommonModule, MatTableModule],
  templateUrl: './employers.html',
  styleUrl: './employers.css'
})
export class EmployersComponent {

  employers: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'position', 'salary', 'rating', 'actions'];
  newEmployer!: Employee;
  dataSource = employersData;

  ngOnInit() {
    console.log("Employers Data:", this.employers);
  }

  constructor(){
    this.employers = [
      {
        id: 1, name: 'Hartford Maryann', username: 'hartfordmaryann', password: 'lovingkittens', position: 'TypeScript Developer', salary: 1000000, rating: 4.5,
        isEdit: false
      },
      {
        id: 2, name: 'Smith John', username: 'smithjohn', password: 'ilovecoding', position: 'Java Developer', salary: 900000, rating: 7.8,
        isEdit: false
      },
      {
        id: 3, name: 'Doe Jane', username: 'doejane', password: 'angularrocks', position: 'Angular Developer', salary: 950000, rating: 2.3,
        isEdit: false
      }
    ];
  }

  addRow(){
    const newId = this.employers.length + 1;
    const newEmployer = new Employee(newId, 'New Employer', 'New Position', 50000, '', '', 0);
    this.employers = [...this.employers, newEmployer];
    console.log("Row Added:", newEmployer);
  }

  editRow(employer: Employee){
    employer.isEdit = true;
    console.log("Editing Employer:", employer);
  }

  onSubmit(){
    console.log("Employer Edited:", this.employers);
  }
}
