import { Component, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../user-data.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  @Output() 
  userData: UserModel;

  constructor() {
    this.userData =  {
      id: "01",
      userName: 'deepak12',
      email: 'deepak2@email.com',
      firstName: 'Deepak',
      lastName: 'kumar',
      role: 'SDE',
    }
   }

  ngOnInit(): void {}

}
