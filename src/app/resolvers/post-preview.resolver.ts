import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostPreviewResolver implements Resolve<Post> {

  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> | Promise<Post> | Post {
    const postId = route.paramMap.get('id');
    if (postId === null) {
      throw new Error('Post ID not found');
    }
    return this.postService.getPostById(Number(postId));
  }
}
