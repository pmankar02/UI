import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, BookCategory } from '../../material/models/models';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

export interface categoryOptions {
  displayValue: string;
  value: number;
}

@Component({
  selector: 'maintenance',
  standalone: false,
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
newCategory: FormGroup;
newBook: FormGroup;
categoryOptions: categoryOptions[] = [];



constructor(
  fb: FormBuilder,
  private apiService: ApiService,
  private snackbar: MatSnackBar,

){
  this .newCategory = fb.group({
    category: fb.control('',[Validators.required]),
    subCategory: fb.control('',[Validators.required]),
  });

  this .newBook = fb.group({
    Title: fb.control("",[Validators.required]),
    author: fb.control("",[Validators.required]),
    price: fb.control(0,[Validators.required]),
    category: fb.control(-1,[Validators.required]),
  });

  apiService.getCategories().subscribe({
    next: (res: BookCategory[]) => {
      res.forEach (c => { 
        this.categoryOptions.push({
          value: c.id,
          displayValue: `${c.category} / ${c.subCategory}`
        });
      })
    }

  })
}

  addNewCategory(){
    let bookCategory: BookCategory = {
      id: 0,
      category: this.newCategory.get("category")?.value,
      subCategory: this.newCategory.get("subCategory")?.value,
    };
    this.apiService.addNewCategory(bookCategory).subscribe({
      next: (res) => {
        if (res === 'cannot insert') {
          this.snackbar.open('Already Exists', 'OK');
        } else {
           this.snackbar.open('INSERTED','OK');
        }
      },


    });
  }
  addNewBook(){
    let book: Book = {
      id: 0,
      title: this.newBook.get('Title')?.value,
      author: this.newBook.get('author')?.value,
      bookCategoryId: this.newBook.get('category')?.value,
      price: this.newBook.get('price')?.value,
      bookCategory: {id: 0, category: '', subCategory: ''},
      ordered: false,
    };

    this.apiService.addBook(book).subscribe({
      next:(res) => {
        if (res === 'inserted') this.snackbar.open('Book Added', 'OK');
      },
    });
  }
} 
