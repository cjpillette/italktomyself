import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Comment, Post } from '../types';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  comments: Comment[];
  subscription: Subscription;

  constructor(private service: MessengerService) { }

  ngOnInit() {
    this.subscription = this.service.getComments(this.post.id).subscribe(data => this.comments = data as Comment[]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
