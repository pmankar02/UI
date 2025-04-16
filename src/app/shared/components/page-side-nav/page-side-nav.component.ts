import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { UserType } from '../../../material/models/models';

export interface NavigationItem {
  value: string;
  Link: string;
}

@Component({
  selector: 'page-side-nav',
  standalone: false,
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})
export class PageSideNavComponent {
    PanelName: string = '';
    navItems: NavigationItem[] = [];

    constructor(private apiService: ApiService, private router: Router) {
      // this.navItems = [
      //   {value: 'view Books', Link: 'view-books'},
      //   {value: 'my orders', Link: 'my-orders'},
      // ];

      apiService.userstatus.subscribe({
        next: (status) => {
          if (status == "loggedIn"){
            router.navigateByUrl('/profile');
            let user = apiService.getUserInfo();
            if (user != null){
              if (user.userType == UserType.ADMIN) {

            
              this.PanelName = 'Admin Panel';
              this.navItems = [
                {value: 'view Books', Link: '/home'},
                {value: 'Maintenance', Link: '/maintenance'},
                {value: 'Return Book', Link: '/return-book'},
                {value: 'View Users', Link: '/view-users'},
                {value: 'Aprooval Requests', Link: '/aprooval-requests'},
                {value: 'All Orders', Link: '/all-orders'},
                {value: 'My Orders', Link: '/my-orders'},

              ];
            } else if (user.userType == UserType.STUDENT) {
              this.PanelName = 'Student Panel';
              this.navItems = [
                {value: 'view Books', Link: '/home'},
                {value: 'My Orders', Link: '/my-orders'},
              ];
            }
          }
        } else if (status == 'loggedoff'){
          this.PanelName = 'Auth Panel';
          router.navigateByUrl('/login');
           this.navItems = [];
          
        }
      },
      
    });
  }
}
