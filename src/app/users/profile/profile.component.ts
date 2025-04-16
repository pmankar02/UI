import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { UserType } from '../../material/models/models';

export interface TableElement {
  name: string;
  value: string;
}

@Component({
  selector: 'profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
 columns: string[] = ['name', 'value'];
 datasource: TableElement[] = [];

 constructor(private apiService: ApiService) {
  let user = apiService.getUserInfo()!;
  this.datasource = [
    { name: "Name", value: user.firstName + " " + user.lastName },
    { name: "Email", value: `${user.email}`}, 
    { name: "mobile", value: `${user.mobileNumber}` },
    { name: "Account Status", value: `${user.accountStatus}` },
    { name : "Created Date", value:`${user.createdDate}` },
    { name: "Type", value: `${UserType[user.userType]}` },

  ];
 }
}
