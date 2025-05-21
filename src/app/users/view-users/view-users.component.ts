import { Component } from '@angular/core';
import { AccountStatus, User, UserType } from '../../material/models/models';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'view-users',
  standalone: false,
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.scss'
})
export class ViewUsersComponent {
  columns: string[] = [
    'userId',
    'userName',
    'email',
    'mobileNumber',
    'createdOn',
    'accountStatus',
    'unblock',
    'userType',
  ];
  users: User[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {
    apiService.getUsers().subscribe({
      next: (res: User[]) => {
        this.users = [];
        res.forEach((r) => this.users.push(r));
      },
  });
}
unblockUser(user: User) {
  var id = user.id;
  this.apiService.unblockUser(id).subscribe({ 
    next: (res) =>{
      if (res == 'unblocked'){
      this.snackBar.open('User unblocked successfully', 'OK'); 
      }else this.snackBar.open('Not unblocked', 'OK');
    },

});
}
}

