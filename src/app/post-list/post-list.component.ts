import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommentService } from '../comment.service';
import { Post } from '../types';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  posts: Post;

  constructor(private service: CommentService) { }

  ngOnInit() {
    this.subscription = this.service.getPosts().subscribe(data => this.posts = data as Post);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
