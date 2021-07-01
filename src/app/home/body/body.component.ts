import { Component, Injectable, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';
import { ActivityService } from 'src/app/shared/activity.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
 
  activity: Comments[];

  constructor(private activtyService: ActivityService) {
    
  }

  ngOnInit(): void {
    this.activity = this.activtyService.getActivity();
    console.log(this.activity);
    
  }


}
