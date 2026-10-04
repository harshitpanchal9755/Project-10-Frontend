import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
})
export class VehicleComponent extends BaseCtl { 
  
  constructor(public locator: ServiceLocatorService, router: ActivatedRoute) {
    super(locator.endpoints.VEHICLE, locator, router)
  }

}
