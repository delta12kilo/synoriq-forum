import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Comments } from 'src/app/comments';
import { ActivityService } from 'src/app/shared/activity.service';

@Component({
  selector: 'app-home-comments',
  templateUrl: './home-comments.component.html',
  styleUrls: ['./home-comments.component.css']
})
export class HomeCommentsComponent implements OnInit {
  @Input() comment: Comments;
  @Input() index: number;

  public actInt: number;

  constructor(private router: Router,
      private activitylen: ActivityService,
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {}

  onClick(index) {
    console.log(index);
    
    index = this.index;
    const al = this.activitylen.getActivityLength();
    console.log(index, al);
    this.router.navigate(['/comment', index]);
  }
}
