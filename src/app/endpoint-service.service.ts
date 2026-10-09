import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8080";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public ORDER = this.SERVER_URL + "/Order";
  public VEHICLE = this.SERVER_URL + "/Vehicle";
  public CAR = this.SERVER_URL + "/Car";
  public EMPLOYEE = this.SERVER_URL + "/Employee";
  //public LOGOUT = this.service_url + "/logout";
  ////http://localhost:8080/Auth/login
  //http://localhost:8080/Auth/logout
}