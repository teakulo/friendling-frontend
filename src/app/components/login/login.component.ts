import {Component, OnInit} from '@angular/core';
import {Route} from "../../constants/route.enum";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router:Router, private authService: AuthService) {
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (result: User | string) => {
          if (typeof result === 'string') {
            this.errorMessage = result;
          } else {
            this.router.navigate([Route.HOME]);
          }
        },
        (error: any) => {
          this.errorMessage = error.message;
        }
      );
    this.authService.isLoggedIn = true;
  }


  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }
}
