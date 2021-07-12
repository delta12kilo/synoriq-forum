import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { BodyComponent } from './home/body/body.component';
import { UserCommentComponent } from './home/home-comments/user-comment/user-comment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: BodyComponent
  },
  {
    path: 'profile', component: ProfilePageComponent
  },
  {
    path: 'comment/:id', component: CommentDetailsComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'notfound', component: PageNotFoundComponent, data: {message: 'Page  Not  Found', code: '404'}
  },
  {
    path: '**', redirectTo: '/notfound', pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
