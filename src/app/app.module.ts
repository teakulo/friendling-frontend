import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {PostFormComponent} from "./components/post-form/post-form.component";
import {PostPreviewComponent} from "./components/post-preview/post-preview.component";
import {CommentComponent} from "./components/comment/comment.component";



@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostPreviewComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
