import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../../employee';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  employees!: Employee;

  constructor(private fb: FormBuilder){
      this.employees = this.fb.group({
        id: [''],
        name: [''],
        username: [''],
        password: ['', Validators.required],
        position: [''],
        salary: ['']
      }) as unknown as Employee;
  }

  registerEmployee(){
    console.log(this.employees);
    console.log("Employee Registered Successfully");
  }

}
