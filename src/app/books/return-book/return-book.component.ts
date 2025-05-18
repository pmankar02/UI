import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from '../../material/models/models';


@Component({
  selector: 'return-book',
  standalone: false,
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.scss'
})
export class ReturnBookComponent {
  returnForm: FormGroup;
  fineTopay: number | null = null;


  constructor(fb: FormBuilder,
    private apiService: ApiService,
    private snackbar: MatSnackBar,
  ) 
  
  {
    this.returnForm = fb.group({
      userId: fb.control(null, [Validators.required]),
      bookId: fb.control(null, [Validators.required]),
    });

  }

  getFine(){
    let userId = this.returnForm.get('userId')?.value;
    let bookId = this.returnForm.get('bookId')?.value;

    this .apiService.getOrdersOfUser(userId).subscribe({
      next:(res: Order[]) => {
        if(res.some(o => !o.returned && o.bookId == bookId)){
          let order: Order = res.filter((o) => o.bookId == bookId)[0];
          this.fineTopay = this.apiService.getFineToPay(order);
        }else{
          this.snackbar.open(`User doesn't have Book with ID: ${bookId}`,'OK')
        }

      },
    });
  }

  returnBook(){
      let userId = this.returnForm.get('userId')?.value;
      let bookId = this.returnForm.get('bookId')?.value;

      this.apiService.returnBook(userId, bookId, this .fineTopay!).subscribe({
        next: (res) => {
          if (res === 'returned')
            this.snackbar.open('Book has been returned successfully', 'OK');
          else this.snackbar.open('Book has not been returned', 'OK');
        },
      });
  }
  

}
