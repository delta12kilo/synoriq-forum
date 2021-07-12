import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Activity } from './activity.model';
import { UserModel } from './user-data.model';
import { ActivityService } from '../shared/activity.service';
import { Comments } from '../comments';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileForm: FormGroup;
  activity;
  status: boolean = false;
  dateTime: Date ;
  
  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      activity: new FormControl(null, [Validators.required]),
      tag: new FormControl()
   });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.dateTime = new Date();
      const newDate = (this.dateTime.getMonth() + 1) + '/' + this.dateTime.getDate() + '/' +  this.dateTime.getFullYear();
      const act = new Comments(
        this.profileForm.value['activity'],'deepak',newDate,this.profileForm.value['tag']
      );
      this.activityService.addActivity(act);
      this.status = true;
    }
    this.profileForm.reset();
  }
  
  

}
