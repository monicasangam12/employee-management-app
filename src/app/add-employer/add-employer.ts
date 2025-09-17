import { Component } from '@angular/core';
import { EmployersComponent } from '../employers/employers';

@Component({
  selector: 'app-add-employer',
  imports: [],
  templateUrl: './add-employer.html',
  styleUrl: './add-employer.css'
})
export class AddEmployerComponent {

    addEmployer(){ 
      const employer = new EmployersComponent();
      console.log(employer);
      console.log("Add Employer Clicked");
    }
}
