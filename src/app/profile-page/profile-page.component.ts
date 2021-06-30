import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Activity } from './activity.model';
import { UserModel } from './user-data.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileForm;
  activity;
  // date = new Date;
  
  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      activity: new FormControl()
   });
  }

  onSubmit(data) {
    this.activity = data.activity; 
    // this.date.getDate() 
    // console.log(this.date);
    
  }
  

}
