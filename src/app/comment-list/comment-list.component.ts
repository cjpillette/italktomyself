import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommentService } from './../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  comments: any;

  constructor(private service: CommentService) { }

  ngOnInit() {
    this.subscription = this.service.getComments().subscribe(data => this.comments = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
