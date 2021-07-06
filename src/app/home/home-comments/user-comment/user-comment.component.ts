import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {

  // public commentId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('_id');
    // console.log(id);
    // this.commentId = id;
  }

}
