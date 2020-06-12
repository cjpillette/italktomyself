import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostNewComponent } from './post-new/post-new.component';

const routes: Routes = [
  {
    path: 'posts', component: PostListComponent
  },
  {
    path: 'add-post', component: PostNewComponent
  },
  {
    path: '',   redirectTo: '/posts', pathMatch: 'full'
  },
  {
    path: '**', component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
