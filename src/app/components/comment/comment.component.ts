import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentsService} from "../../services/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() postId: number = 0;
  @Input() userId: number = 0;
  comments: Comment[] = [];
  newComment: string = '';

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentsService.getComments()
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
  }

  addComment(newCommentContent: string) {
    const comment: Comment = {
      content: newCommentContent,
      userId: this.userId
    };

    this.commentsService.addComment(comment.content)
      .subscribe((newComment: Comment) => {
        this.comments.push(newComment);
        this.newComment = '';
      });
  }
  deleteComment(commentId: number) {
    this.commentsService.deleteComment(commentId)
      .subscribe(() => {
        this.comments = this.comments.filter(comment => comment.id !== commentId);
      });
  }
}
