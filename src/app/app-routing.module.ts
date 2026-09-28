import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { StudentListComponent } from './student/student-list.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'role',
    component: RoleComponent,
  },

  {
    path: 'roleList',
    component: RoleListComponent,
  },

  {
    path: 'role/:id',
    component: RoleComponent,
  },

  {
    path: 'user',
    component: UserComponent,
  },

  {
    path: 'userList',
    component: UserListComponent,
  },

  {
    path: 'user/:id',
    component: UserComponent,
  },

  {
    path: 'college',
    component: CollegeComponent,
  },

  {
    path: 'collegeList',
    component: CollegeListComponent,
  },

  {
    path: 'college/:id',
    component: CollegeComponent,
  },

  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'studentList',
    component: StudentListComponent,
  },

  {
    path: 'student/:id',
    component: StudentComponent,
  },
  {
    path: 'marksheet',
    component: MarksheetComponent,
  },

  {
    path: 'marksheetList',
    component: MarksheetListComponent,
  },

  {
    path: 'marksheet/:id',
    component: MarksheetComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },

  {
    path: 'courseList',
    component: CourseListComponent,
  },

  {
    path: 'course/:id',
    component: CourseComponent,
  },

  {
    path: 'subject',
    component: SubjectComponent,
  },

  {
    path: 'subjectList',
    component: SubjectListComponent,
  },

  {
    path: 'subject/:id',
    component: SubjectComponent,
  },

  {
    path: 'timetable',
    component: TimetableComponent,
  },

  {
    path: 'timetableList',
    component: TimetableListComponent,
  },

  {
    path: 'timetable/:id',
    component: TimetableComponent,
  },

  {
    path: 'faculty',
    component: FacultyComponent,
  },

  {
    path: 'facultyList',
    component: FacultyListComponent,
  },

  {
    path: 'faculty/:id',
    component: FacultyComponent,
  },

  {
    path: 'login/forgotpassword',
    component: ForgotpasswordComponent
  },

  {
    path: 'myprofile',
    component: MyprofileComponent
  },

   {
    path: 'myprofile/:id',
    component: MyprofileComponent
   },

   {
    path: 'changepassword',
    component: ChangepasswordComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
