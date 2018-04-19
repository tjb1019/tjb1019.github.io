import { Injectable } from '@angular/core';

import { Route } from '@models/route.model';

@Injectable()
export class LocationService {

  public activeRoute: Route;

  constructor() { }

}
