import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css']
})
export class HomeSidebarComponent implements OnInit {
  @Input() comment: Comments;

  constructor() { }

  ngOnInit(): void {
  }

}
