import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent extends BaseListCtl { 

  constructor(public locator: ServiceLocatorService, router: ActivatedRoute){

    super(locator.endpoints.EMPLOYEE, locator, router)
  }

}
