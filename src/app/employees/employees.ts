import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

const employeesData: Employee[] = [
    new Employee(1, 'John Doe', 'Software Engineer', 60000, 'johndoe@aol.com' , 'password123', 4.5),
    new Employee(2, 'Jane Smith', 'Project Manager', 75000, 'janesmith@gmail.com', 'password456', 4.7),
    new Employee(3, 'Alice Johnson', 'UX Designer', 65000, 'alicejohnson@onenote.com', 'password789', 4.3),
    new Employee(4, 'Bob Brown', 'QA Tester', 55000, 'bobbrown@aol.com', 'password321', 4.0),
    new Employee(5, 'Charlie Davis', 'DevOps Engineer', 70000, 'charliedavis@microsoft.com', 'password654', 4.6)
];

const COLUMNS_SCHEMA = [
  {
      key: "id",
      type: "number",
      label: "Id"
  },
  {
      key: "name",
      type: "text",
      label: "Name"
  },
  {
    key: "position",
    type: "text",
    label: "Position"
},
  {
      key: "salary",
      type: "number",
      label: "Salary"
  },
  {
    key: "username",
    type: "text",
    label: "Username"
  },
  { 
    key: "password",
    type: "password",
    label: "Password"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
];

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule, MatTableModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class EmployeesComponent {
    employees: Employee[] = [];
    $newEmployee!: Employee;
    columnsSchema: any = COLUMNS_SCHEMA;
    displayedColumns: string[] = COLUMNS_SCHEMA.map((col: { key: any; }) => col.key);
    dataSource = employeesData;

    ngOnInit() {
        this.employees = this.dataSource;
        console.log("Employees Data:", this.employees);
    }
    constructor(){}

    addRow(){
        const newId = this.employees.length + 1;
        const newEmployee = new Employee(newId, 'New Employee', 'New Position', 50000, '', '', 0);
        this.dataSource = [...this.dataSource, newEmployee];
        this.employees = this.dataSource;
        console.log("Row Added:", newEmployee);
    }

    editRow(employee: Employee){
        employee.isEdit = true;
        console.log("Editing Employee:", employee);
    }

    onSubmit(){
        this.employees.push(this.$newEmployee);
        console.log("New Employee Added:", this.$newEmployee);
    }
}
