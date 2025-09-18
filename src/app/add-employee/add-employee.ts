import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployeeComponent {

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.employeeForm = this.fb.group({
      name: [''],
      username: [''],
      password: [''],
      position: [''],
      salary: [''],
      rating: ['']
    });
    console.log(this.employeeForm);
  }

  addEmployee(){ 
    const employee = new Employee(0, '', '', 0, '', '', 0);
    console.log(employee);
    console.log("Add Employee Clicked");
  }

}

