import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  newComment = '';

  constructor() { }

  ngOnInit() {
  }

  addComment() {
    // show the form field
  }

  deleteComment() {
    // hide the form field
  }

}
