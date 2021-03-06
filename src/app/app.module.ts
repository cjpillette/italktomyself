import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { MessengerFormComponent } from './messenger-form/messenger-form.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostNewComponent } from './post-new/post-new.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    MessengerFormComponent,
    PostDetailsComponent,
    PostListComponent,
    PostNewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
