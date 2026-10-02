import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ORDER, locator, route)
  }

}
