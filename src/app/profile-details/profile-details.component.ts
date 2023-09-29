import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../interfaces/user-data-interface';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  userData: UserData = {} as UserData;// Use the interface as the type

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<UserData>('/assets/user-data.json').subscribe(data => {
      this.userData = data;
    });
  }
}
