import { Component } from '@angular/core';
import {CommentsService} from "../../services/comment.service";
import { Comment } from "../../models/comment.model";
import {Post} from "../../models/post.model";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {
  constructor(private postService: PostService, private commentsService: CommentsService) { }

  post: Post | undefined;
  likeCount: number = 0;
  liked: boolean = false;
  comments: Comment[] = [];
  newComment: string = '';

  ngOnInit() {
    this.fetchComments();
  }

  fetchComments() {
    this.commentsService.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }


  updateLikeButton() {
    if (this.liked) {
      this.liked = false;
    } else {
      this.liked = true;
    }
  }

  onLikeButtonClick() { //one like per user
    this.likeCount++;
    this.updateLikeButton();
  }

  submitComment() {
    if (this.newComment) {
      const newComment: Comment = {
        content: this.newComment,
        userId: 0 // Update with the appropriate userId
      };

      this.comments.push(newComment);
      this.newComment = '';
    }
  }


/*
only the user to whom the post belongs should delete the comments?
should the user be able to delete other users' comments?
  deleteComment(index: number) {
    this.comments.splice(index, 1);
  }
*/


}


