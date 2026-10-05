import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { AuthServiceService } from './auth-service.service';

import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';

import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';

import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list.component';

import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';

import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';

import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';

import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';

import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';

import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable/timetable-list.component';

import { FooterComponent } from './footer/footer.component';

import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';

import { ForgotpasswordComponent } from './login/forgotpassword.component';

import {
  TranslateHttpLoader
} from '@ngx-translate/http-loader';

import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';

import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order/order-list.component';

import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle/vehicle-list.component';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car/car-list.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json'
  );
}
``

@NgModule({

  declarations: [

    AppComponent,

    LoginComponent,
    SignupComponent,

    NavbarComponent,
    DashboardComponent,

    UserComponent,
    UserListComponent,

    RoleComponent,
    RoleListComponent,

    StudentComponent,
    StudentListComponent,

    FacultyComponent,
    FacultyListComponent,

    CourseComponent,
    CourseListComponent,

    SubjectComponent,
    SubjectListComponent,

    MarksheetComponent,
    MarksheetListComponent,

    CollegeComponent,
    CollegeListComponent,

    TimetableComponent,
    TimetableListComponent,

    FooterComponent,

    MyprofileComponent,
    ChangepasswordComponent,

    ForgotpasswordComponent,

    MarksheetmeritlistComponent,
    GetmarksheetComponent,
    
     OrderComponent,
     OrderListComponent,

     VehicleComponent,
     VehicleListComponent,
     
     CarComponent,
     CarListComponent
  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    HttpClientModule,

    FormsModule,

    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }

    })

  ],

  providers: [

    HttpServiceService,

    EndpointServiceService,

    ServiceLocatorService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthServiceService,
      multi: true
    }

  ],

  bootstrap: [
    AppComponent
  ]

})

export class AppModule { }