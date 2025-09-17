import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class EmployeesComponent {
    employees: Employee[] = [];
    name: any;
    username: any;
    position: any;
    salary: any;
    rating: any;
    $newEmployee!: Employee;
    tableData: any[] = [];
    newEmployeeName: string = '';
    nextId: number = 4;

    constructor(){
       this.tableData = [
            { id: 1, name: 'Alice Johnson', username: '', position: 'Software Engineer', salary: 90000, rating: 4.5 },
            { id: 2, name: 'Bob Smith', username: '', position: 'Product Manager', salary: 105000, rating: 4.2 },
            { id: 3, name: 'Charlie Brown', username: '', position: 'UX Designer', salary: 85000, rating: 4.7 }
        ];
    }

    onAddButtonClick(){
        if(this.newEmployeeName.trim() !== ''){
            const newEntry =   {id: this.nextId++, name: this.newEmployeeName, username: 'bsangam@yahoo.com', position: 'Java Tech Lead', salary: 175000, rating: 8.9 };
            this.newEmployeeName = 'Bhupendra Sangam';
            this.tableData.push(newEntry);
            console.log("New Employee Added:", this.newEmployeeName);
        }
    }

    onSubmit(){
        this.$newEmployee = new Employee(this.employees.length + 1, this.name, this.position, this.salary, this.username, 'defaultPassword', this.rating);
        this.employees.push(this.$newEmployee);
        // this.name = 'Bhupendra Sangam';
        // this.username = 'bsangam@yahoo.com';
        // this.position = 'TypeScript Developer';
        // this.salary = '780000';
        // this.rating = '4.5';
        this.addEmployee(this.$newEmployee)
        console.log("New Employee Added:", this.$newEmployee);
    }

    addEmployee(newEmployee: Employee){
        const employee = new Employee(0, '', '', 0, '', '', 0);
        console.log(newEmployee);
        console.log("Add Employee Clicked");
    }
}
