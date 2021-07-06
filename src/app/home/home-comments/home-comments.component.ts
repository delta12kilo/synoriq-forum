import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from 'src/app/comments';

@Component({
  selector: 'app-home-comments',
  templateUrl: './home-comments.component.html',
  styleUrls: ['./home-comments.component.css']
})
export class HomeCommentsComponent implements OnInit {
  @Input() comment: Comments;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(comment) {
    this.router.navigate(['/comment', comment._id]);
  }
}
