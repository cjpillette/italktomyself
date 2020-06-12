import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MessengerService } from './../messenger.service';
import { Post } from '../types';

@Component({
  selector: 'app-messenger-form',
  templateUrl: './messenger-form.component.html',
  styleUrls: ['./messenger-form.component.scss']
})
export class MessengerFormComponent implements OnInit {
  @Input() messengerType: string;
  @Input() placeholder: string;
  @Input() post?: Post;

  form = new FormGroup({
    body: new FormControl('', []),
  });

  constructor(private service: MessengerService) { }

  ngOnInit() {
  }

  onSubmit() {
    switch (this.messengerType) {
      case 'post':
        // TODO second arg should be the userId
        this.service.postPost(this.form.value, 9);
        break;
      case 'comment':
        this.service.postComment(this.form.value, this.post.id);
        break;
    }
  }

  onDelete() {
    // TODO Http delete
    this.form.controls.body.setValue('');
  }

}
