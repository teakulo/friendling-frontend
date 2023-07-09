import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment} from "../models/comment.model";
import { CommentsService} from "../services/comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<Comment[]> {
  constructor(private commentsService: CommentsService) {}
  resolve(): Observable<Comment[]> {
    return this.commentsService.getComments();
  }
}
