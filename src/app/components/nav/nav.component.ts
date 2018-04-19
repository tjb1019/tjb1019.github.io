import { Component, OnInit } from '@angular/core';

import { routes } from './routes';
import { Route } from '@models/route.model';

import { LocationService } from '@core/services/location.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  routes = routes;
  showMobileNav: boolean;

  constructor(public locationService: LocationService) { }

  ngOnInit() {
    switch (window.location.pathname) {
      case '/about':
        this.locationService.activeRoute = routes[0];
        break;
      case '/technical':
        this.locationService.activeRoute = routes[1];
        break;
      case '/projects':
        this.locationService.activeRoute = routes[2];
        break;
      case '/experience':
        this.locationService.activeRoute = routes[3];
        break;
      case '/contact':
        this.locationService.activeRoute = routes[4];
        break;
    }
  }

  toggleNav(): void {
    const navItems = <HTMLElement>document.querySelector('.nav-items');
    this.showMobileNav = !this.showMobileNav;
    navItems.style.display = this.showMobileNav ? 'block' : 'none';
  }

}
