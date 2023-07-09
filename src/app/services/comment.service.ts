import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<Comment[]>(this.apiUrl, requestOptions);
  }

   addComment(content: String): Observable<Comment> {
     const accessToken = localStorage.getItem("accessToken")
     const headerDict = {
       'Authorization': "Bearer " + accessToken
     }
     const requestOptions = {
       headers: new HttpHeaders(headerDict),
     };
    return this.http.post<Comment>(this.apiUrl, content, requestOptions);}

  deleteComment(id: number): Observable<Comment> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Comment>(url, requestOptions);
  }
}
