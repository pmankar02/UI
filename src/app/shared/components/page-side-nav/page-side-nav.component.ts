import { Component } from '@angular/core';

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
    PanelName: string = 'Student Panel';
    navItems: NavigationItem[] = [];

    constructor() {
      this.navItems = [
        {value: 'view Books', Link: 'view-books'},
        {value: 'my orders', Link: 'my-orders'},
      ];
    }
}
