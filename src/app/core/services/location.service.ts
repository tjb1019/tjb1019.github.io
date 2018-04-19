import { Injectable } from '@angular/core';

import { Route } from '@models/route.model';

@Injectable()
export class LocationService {

  public activeRoute: Route;

  constructor() { }

  select(route: Route): void {
    this.activeRoute = route;
  }

  deselect(): void {
    this.activeRoute = null;
  }

}
