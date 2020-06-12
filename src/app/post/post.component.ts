import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MessengerService } from './../messenger.service';
import { Comment, Post } from '../types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[];
  isPosted = false;

  form = new FormGroup({
    body: new FormControl('', [Validators.required]),
  });

  constructor(private service: MessengerService) { }

  ngOnInit() {
    this.service.getComments(this.post.id).subscribe(data => this.comments = data as Comment[]);
  }

  addComment() {
    // HTTP post
    this.isPosted = true;
  }

  deleteComment() {
    // HTTP delete
    this.resetForm();
  }

  resetForm() {
    this.form.controls.body.setValue('');
  }

}
