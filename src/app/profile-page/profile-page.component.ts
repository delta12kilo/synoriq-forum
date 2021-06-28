import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

  onSubmitActivity() {}

}
