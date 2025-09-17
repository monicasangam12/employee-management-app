import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  loginEmployee(){
    console.log(this.username);
    console.log(this.password);
    console.log("Login Successful");
  }
}
