import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MessengerService } from './../messenger.service';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  form = new FormGroup({
    body: new FormControl('', []),
  });

  constructor(private service: MessengerService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO set userID, here 9, as second arg
    this.service.postPost(this.form.value, 9);
  }

}
