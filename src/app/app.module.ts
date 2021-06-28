import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './home/body/body.component';
import { HomeCommentsComponent } from './home/home-comments/home-comments.component';
import { HomeSidebarComponent } from './home/home-sidebar/home-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserCommentComponent } from './home/home-comments/user-comment/user-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    HomeCommentsComponent,
    HomeSidebarComponent,
    UserCommentComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
