import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ApiService } from './shared/services/api.service';
import { UsersModule } from './users/users.module';
import { BookModule } from './books/books.module';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule, AuthModule, UsersModule, BookModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit { 
  title = 'UI';

  constructor(private apiService: ApiService)  {}
  
  ngOnInit(): void {
    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userstatus.next(status);
  }
  
}
