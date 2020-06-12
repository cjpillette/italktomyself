import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from './types';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<{}> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(postId: number): Observable<{}> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  postPost(post: Post, userId: number) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: post.body,
        userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

  postComment(body: string, postId: number) {
    this.http.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        body,
        postId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

}
