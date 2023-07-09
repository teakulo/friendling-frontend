import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {Route} from "../../constants/route.enum";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  nickname: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router:Router, private authService: AuthService) {
  }
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  }
  signup() {
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Invalid email format';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.authService.createUser(this.email, this.firstName, this.lastName, this.nickname, this.password)
      .subscribe(
        (user: User) => {

          this.router.navigate([Route.EMPTY]);

        },
        (error: string) => {
          this.errorMessage = error;
        }
      );
  }

}
