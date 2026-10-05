import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
})
export class CarComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, router: ActivatedRoute) {
    super(locator.endpoints.CAR, locator, router);
  }

}
