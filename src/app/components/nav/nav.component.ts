import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routes } from './routes';
import { Route } from '@models/route.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  routes = routes;
  activeRoute: Route;
  navItems: HTMLElement;
  mobileVisible: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
    switch (window.location.pathname) {
      case '/about':
        this.activeRoute = routes[0];
        break;
      case '/technical':
        this.activeRoute = routes[1];
        break;
      case '/projects':
        this.activeRoute = routes[2];
        break;
      case '/experience':
        this.activeRoute = routes[3];
        break;
      case '/contact':
        this.activeRoute = routes[4];
        break;
    }
  }

  ngAfterViewInit() {
    this.navItems = <HTMLElement>document.querySelector('.nav-items');
  }

  navigate(route: Route): void {
    this.activeRoute = route;
    if (this.mobileVisible) {
      this.navItems.style.display = 'none';
      this.mobileVisible = false;
    }
  }

  toggleNav(): void {
    this.mobileVisible = !this.mobileVisible;
    this.navItems.style.display = this.mobileVisible ? 'block' : 'none';
  }

}
