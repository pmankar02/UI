import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatus,  Order,  User, UserType } from '../../../material/models/models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'page-table',
  standalone: false,
  templateUrl: './page-table.component.html',
  styleUrl: './page-table.component.scss'
})
export class PageTableComponent {
  @Input()
  columns: string[] = [];

  @Input()
  dataSource: any[] = [];

  @Output()
  approve = new EventEmitter<User>();

  @Output()
  unblock = new EventEmitter<User>();


  getFineTopay(order: Order) {
    return this.apiService.getFine(order);
    return this 
  }
  constructor(private apiService: ApiService) {}

  getAccountStatus(input: AccountStatus) {
    return AccountStatus[input];
  }
}

