import { Component, Injectable, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
@Injectable()
export class BodyComponent implements OnInit {
  // private comments: Comments[];
  // isLoggedin = true;
  public comments: Comments[] = [
    {
      id:'01',
      question: "How to start server",
      user: "Jasroop",
      date: "10/11/21",
      tag: "Angular"
    },
    {
      id:'02',
      question: "How to start server",
      user: "Deepak",
      date: "09/11/21",
      tag: "React"
    },
    {
      id: "03",
      question: "How to make components",
      user: "Bhanu",
      date: "08/11/21",
      tag: "Ionic"
    },
    {
      id: "04",
      question: "How to print line without line break",
      user: "Karan",
      date: "07/11/21",
      tag: "Pyhton"
    },
    {
      id: "05",
      question: "How to start server",
      user: "Manu",
      date: "05/11/21",
      tag: "Java"
    }
  ]

  constructor() {
    
  }

  getComment(index: number) {
    // console.log(this.comments[index].question);
    return this.comments[index].question;
  }

  ngOnInit(): void {
    // console.log(this.getComment[0]);
    console.log('hii');
    this.getComment(0);
    
  }

  // testBody() {
  //   return "Hello"
  // }

}
