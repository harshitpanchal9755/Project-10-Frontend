import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, router: ActivatedRoute) {
    super(locator.endpoints.EMPLOYEE, locator, router)
    
  }

}
