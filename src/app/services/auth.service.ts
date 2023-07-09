import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = `${environment.backendUrl}/api/auth`;
  isLoggedIn = false;


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User | string> {
    const body = { email, password };
    return this.http.post<User>(`${this.apiUrl}/authenticate`, body);
  }

  createUser(email: string, firstname: string, lastname: string, username: string, password: string): Observable<User> {
    // Send a POST request to the backend API with the user data

    return this.http.post<User>(`${this.apiUrl}/register`, { email, firstname, lastname, username, password })
      .pipe(
        catchError((error) => {
          if (error.status === 403) {
            return throwError('Email or username already exists.');
          } else {
            return throwError('Error occurred while registering. Please try again later.');
          }
        })
      );
  }
}
