import { NgModule } from '@angular/core';
import { BookStoreComponent } from './book-store/book-store.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BookStoreComponent
  ],
  imports: [SharedModule],
})
export class BookModule { }
