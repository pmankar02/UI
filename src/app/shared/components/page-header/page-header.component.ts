import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'page-header',
  standalone: false,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  loggedIn: boolean = false;
  name: string = '';

  constructor(private apiService: ApiService) {
    apiService.userstatus.subscribe({
      next: res => {
        if (res == 'loggedIn') {
          this.loggedIn =true;
          let user = apiService.getUserInfo()!;
          this.name = `${user.firstName} ${user.lastName}`;
        }else {
          this.loggedIn = false;
          this.name = '';
        }
      },
    });
  }
  logout() {
    this.apiService.logout();
  }

}
