import { Component, OnInit, Input } from '@angular/core';
import { BodyComponent } from '../home/body/body.component';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  constructor(private comment: BodyComponent) { }

  ngOnInit(): void {
    console.log(
      this.comment.getComment(0)
    );
    // console.log(this.comment.testBody());
    
  }

  // testMethod() {
  //   console.log(this.comment.getComment(2));
  // }

}
