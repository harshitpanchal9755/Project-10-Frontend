import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent extends BaseCtl{ 

  constructor(public locator: ServiceLocatorService, router: ActivatedRoute) {
    super(locator.endpoints.ORDER, locator,router)

  }

}
