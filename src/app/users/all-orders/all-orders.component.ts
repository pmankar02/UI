import { Component } from '@angular/core';
import { Order } from '../../material/models/models';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'all-orders',
  standalone: false,
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {
  columnsForPendingReturns: string[] = [
    'orderId',
    'userIdForOrder',
    'userNameForOrder',
    'bookId',
    'orderDate',
    'fineToPay',

  ];

  columnsForCompletedReturns: string[] = [
    'orderId',
    'userId',
    'userNameForOrder',
    'bookId',
    'orderDate',
    'returnedDate',
    'fineToPay',
  ];

  ordersWithPendingReturns: Order[] = [];
  ordersWithCompletedReturns: Order[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar){
    apiService.getOrders().subscribe({
      next: (res: Order[]) => {
        this.ordersWithPendingReturns = res.filter(o => !o.returned);
        this.ordersWithCompletedReturns = res.filter(o => o.returned);

      },
      error: (err) => {
        this.snackBar.open('No order Found', 'Ok');
      },
    });
  }

}
