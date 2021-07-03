import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
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
    path: 'comment', component: ViewCommentComponent
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
