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
    'orderid',
    'userIdForOrder',
    'userNameForOrder',
    'bookId',
    'orderDate',
    'fineToPay',

  ];

  columnsForCompletedReturns: string[] = [
    'orderid',
    'userIdForOrder',
    'userNameForOrder',
    'bookId',
    'orderDate',
    'returnedDate',
    'finepaid',
  ];
  showProgressBar: boolean = false;
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
    sendEmail(){
      this.showProgressBar = true;
      this.apiService.sendEmail().subscribe({
        next: (res) => {
          if (res === 'send') {
            
            this.snackBar.open('Emails have been sent to respected students!',
              'Ok'

            );
            this.showProgressBar = false;
          }else {
            this.snackBar.open('Emails have not been sent!','ok');
            this.showProgressBar = false;
          }
    },
  });
}

    blockUsers(){
      this.showProgressBar = true;
      this.apiService.blockUser().subscribe({
        next: (res) => {
          if (res === 'Blocked') {
            this.snackBar.open('Eligible Users Account were blocked!', 'Ok');
            this.showProgressBar = false;
          }else {
            this.snackBar.open('Users have not been blocked!','ok');
            this.showProgressBar = false;
          }

        },
      });
    }

}
