import { Component, OnInit, Input } from '@angular/core';
import { Comments } from '../comments';
import { BodyComponent } from '../home/body/body.component';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  @Input() activity: Comments;

  active;

  constructor(private comment: ActivityService) {}

  ngOnInit(): void {

    this.active = this.comment.getActivities(0);
    console.log(this.comment.getActivities(0));
    
  }

}
