import { Component } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-add-employee',
  imports: [],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployeeComponent {

  addEmployee(){ 
    const employee = new Employee(0, '', '', 0, '', '', 0);
    console.log(employee);
    console.log("Add Employee Clicked");
  }

}
