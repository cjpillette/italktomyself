import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentListComponent } from './comment-list/comment-list.component';

const routes: Routes = [
  {
    path: 'comments', component: CommentListComponent
  },
  {
    path: '',   redirectTo: '/comments', pathMatch: 'full'
  },
  {
    path: '**', component: CommentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
