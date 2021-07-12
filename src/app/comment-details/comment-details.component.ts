import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, RouterLink } from '@angular/router';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  // public commentId: string;
  // public commentId: number;
  public commentIdInt: number;
  public comment;
  public previousButtonFlag = true;
  public nextButtonFlag = true;
  

  constructor(private route: ActivatedRoute, private activity: ActivityService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      // this.commentId = id;
      this.commentIdInt = id;
      
      
    });

    this.comment = this.activity.getActivities(this.commentIdInt);

    if (this.commentIdInt>this.activity.getActivityLength()) {
      this.router.navigate(['/notfound']);
    }

    if(this.commentIdInt === 0) {
      this.previousButtonFlag = false;
    }
    if(this.commentIdInt === this.activity.getActivityLength()-1) {
      this.nextButtonFlag = false;
    }
  }

  onPrevious() {
    let previousId = this.commentIdInt-1;
    if (previousId >= 0) {
      this.router.navigate(['/comment', previousId])
      this.comment = this.activity.getActivities(previousId);
      // this.previousButtonFlag = true;
    } 
    if (this.commentIdInt-1 <= 0) {
      this.previousButtonFlag = false;
    }
    if (this.commentIdInt <= this.activity.getActivityLength()) {
      this.nextButtonFlag = true;
    }
  }

  onNext() {
    let nextId = this.commentIdInt+1;
    let checkMax = this.activity.getActivityLength();
    if(nextId < checkMax) {
      this.router.navigate(['/comment', nextId])
      this.comment = this.activity.getActivities(nextId);
    } else {
      // this.router.navigateByUrl("no-comments");
    }
    if (this.commentIdInt >= 0) {
      this.previousButtonFlag = true;
    }
    if(this.commentIdInt === checkMax-2) {
      this.nextButtonFlag = false;
    }
  }
}
