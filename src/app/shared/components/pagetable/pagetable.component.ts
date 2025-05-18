import { Component, Input } from '@angular/core';
import { AccountStatus,User, UserType } from '../../../material/models/models';

@Component({
  selector: 'pagetable',
  standalone: false,
  templateUrl: './pagetable.component.html',
  styleUrl: './pagetable.component.scss'
})
export class PagetableComponent {
  @Input()
  columns: string[] = ['col1'];

  @Input()
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'John Doe',
      lastName: 'Doe',
      accountStatus: AccountStatus.ACTIVE,
      createdOn: 'pm',
      email: 'pp',
      mobileNumber: '123',
      password: '456',
      userType: UserType.ADMIN
    },
  ];

}
