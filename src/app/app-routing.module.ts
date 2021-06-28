import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [

  {
    path: '', component: BodyComponent
  },
  {
    path: 'profile', component: ProfilePageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
