import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationService } from '@core/services/location.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LocationService
  ]
})
export class CoreModule { }
