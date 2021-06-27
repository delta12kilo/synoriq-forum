import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';

@Component({
  selector: 'app-home-comments',
  templateUrl: './home-comments.component.html',
  styleUrls: ['./home-comments.component.css']
})
export class HomeCommentsComponent implements OnInit {
  @Input() comment: Comments;

  constructor() { }

  ngOnInit(): void {
  }

}
