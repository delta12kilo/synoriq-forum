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
  
  // date = new Date;
  
  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      activity: new FormControl(null, [Validators.required]),
      tag: new FormControl()
   });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const act = new Comments(
        this.profileForm.value['activity'],'deepak','12/12/1211',this.profileForm.value['tag']
      );
      this.activityService.addActivity(act);
      this.status = true;
    }
    this.profileForm.reset();
  }
  
  

}
