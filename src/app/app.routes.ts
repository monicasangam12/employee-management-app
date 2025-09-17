import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { EmployeesComponent } from './employees/employees';
import { EmployersComponent } from './employers/employers';
import { AddEmployeeComponent } from './add-employee/add-employee';
import { SearchEmployeesSkillComponent } from './search-employees-skill/search-employees-skill';
import { AddEmployerComponent } from './add-employer/add-employer';


export const routes: Routes =  [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'add-employer', component: AddEmployerComponent},
  { path: 'search-employees-skill', component: SearchEmployeesSkillComponent} 
];