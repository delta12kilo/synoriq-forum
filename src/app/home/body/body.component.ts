import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from 'src/app/comments';
import { ActivityService } from 'src/app/shared/activity.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
 
  activity: Comments[];

  constructor(private activtyService: ActivityService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.activity = this.activtyService.getActivity();
    // console.log(this.activity);
    
  }

  onSelect(comment) {
    console.log(comment);
    this.router.navigate(['/comment', comment._id]);
  }

  onSelectCategory(comment) {
    console.log(comment);
  }
}
