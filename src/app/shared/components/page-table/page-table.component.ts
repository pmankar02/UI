import { Component, Input } from '@angular/core';
import { AccountStatus, User, UserType } from '../../../material/models/models';

@Component({
  selector: 'page-table',
  standalone: false,
  templateUrl: './page-table.component.html',
  styleUrl: './page-table.component.scss'
})
export class PageTableComponent {
  @Input()
  columns: string[] = ['col1'];

  @Input()
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'John Doe',
      lastName: 'Doe',
      accountStatus: AccountStatus.ACTIVE,
      createdOn: 'dd',
      email: 'ddd',
      mobileNumber: '1234',
      password: '',
      userType: UserType.ADMIN
    },
  ];
}
