import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage";
import { RegisterComponent } from "./register/register";
import { LoginComponent } from "./login/login";
import { AddEmployeeComponent } from "./add-employee/add-employee";
import { AddEmployerComponent } from "./add-employer/add-employer";
import { EmployeesComponent } from "./employees/employees";
import { EmployersComponent } from "./employers/employers";
import { SearchEmployeesSkillComponent } from "./search-employees-skill/search-employees-skill";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomepageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'employee-management-app';
}
