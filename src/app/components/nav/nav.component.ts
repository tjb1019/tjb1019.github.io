import { Component, OnInit } from '@angular/core';

import { Route, routes } from './routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  routes = routes;
  activeRoute: Route;

  constructor() { }

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
      case '/contact':
        this.activeRoute = routes[3];
        break;
      case '/blog':
        this.activeRoute = routes[4];
        break;
    }
  }

}
