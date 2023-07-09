import { Component } from '@angular/core';
import {SafeUrl} from "@angular/platform-browser";
import {Post} from "../../models/post.model";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  title: string = '';
  description: string = '';
  ageGroup: string = '';
  public imagePath?: SafeUrl | undefined;
  tags: string[] = [];
  tagInput: string = '';
  currentTag: string = '';
  privacy: string = '';
  newTag?: string = ''; // Define newTag variable

  constructor(private postService: PostService) { }
  public fileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const fileName = file.name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        const currentUser = localStorage.getItem('user');
        const currentDate = new Date();
        const post : Post = {
          id: 0,
          postedBy: currentUser ? JSON.parse(currentUser) : "",
          age: "",
          description: "",
          privacy: "",
          title: fileName,
          image: reader.result as string,
          postedOn: currentDate,
          tags: []
        }
        this.postService.sendImage(post).subscribe(() => {
          console.log('image uploaded');
        });
      };
    }
  }

  create(post: Post) {
    this.postService.createPost(post).subscribe(() => {
      console.log('Post created');
    });
  }


  onTagRemoved(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }

  addTag() {
    const newTag = this.tagInput.trim();
    if (newTag !== '' && !this.tags.includes(newTag)) {
      this.tags.push(newTag);
    }
    this.currentTag = newTag;
    this.tagInput = '';

  }
  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
    console.log('Title:', this.title);
    console.log('Description:', this.description);
    console.log('Age Group:', this.ageGroup);
    console.log('Image:', this.imagePath);
    console.log('Tags:', this.tags);
    console.log('Privacy:', this.privacy);
  }


}
