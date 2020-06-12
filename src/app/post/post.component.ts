import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Post } from '../types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  isPosted = false;

  form = new FormGroup({
    newComment: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
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
    this.form.controls.newComment.setValue('');
  }

}
