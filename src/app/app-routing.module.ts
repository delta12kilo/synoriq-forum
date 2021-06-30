import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';

const routes: Routes = [

  {
    path: '', component: BodyComponent
  },
  {
    path: 'profile', component: ProfilePageComponent
  },
  {
    path: 'comment', component: ViewCommentComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
