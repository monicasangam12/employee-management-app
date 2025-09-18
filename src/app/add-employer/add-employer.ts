import { Component } from '@angular/core';
import { EmployersComponent } from '../employers/employers';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employer',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-employer.html',
  styleUrl: './add-employer.css'
})
export class AddEmployerComponent {
  employerForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.employerForm = this.fb.group({
      name: [''],
      username: [''],
      password: [''],
      position: [''],
      salary: [''],
      rating: ['']
    });
    console.log(this.employerForm);
  }

    addEmployer(){ 
      const employer = new EmployersComponent();
      console.log(employer);
      console.log("Add Employer Clicked");
    }
}
