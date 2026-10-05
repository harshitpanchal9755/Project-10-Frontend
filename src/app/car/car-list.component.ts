import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
})
export class CarListComponent extends BaseListCtl{ 

  constructor(public locator: ServiceLocatorService, router: ActivatedRoute) {
    super(locator.endpoints.CAR, locator, router)
  }

}
