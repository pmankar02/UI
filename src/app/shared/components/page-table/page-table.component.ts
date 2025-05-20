import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatus, User, UserType } from '../../../material/models/models';

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
}
