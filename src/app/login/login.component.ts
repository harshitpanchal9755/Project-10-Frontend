  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { HttpServiceService } from '../http-service.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  })
  export class LoginComponent implements OnInit{
    endpoint = 'http://localhost:8080/Auth/login';

    form: any = {
      error: false,
      message: '',
      data: { id: null },
      inputerror: {},
        successMsg: '', 
     
    };

    constructor(
      private httpService: HttpServiceService,
      private router: Router,
    ) {}

      ngOnInit() {
    const message = localStorage.getItem('logoutMessage');

    if (message) {
      this.form.successMsg = message;
      localStorage.removeItem('logoutMessage');
    }
  }


    signIn() {
      var _self = this;
      this.httpService.post(this.endpoint, this.form.data, function (res: any) {
        _self.form.message = '';
        _self.form.inputerror = {};

        if (res.result.message) {
          _self.form.message = res.result.message;
        }

        _self.form.error = !res.success;
        if (_self.form.error && res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;
        }

        if (res.success) {
          localStorage.setItem('loginId', res.result.loginId);
          localStorage.setItem('role', res.result.role);
          localStorage.setItem('fname', res.result.fname);
          localStorage.setItem('lname', res.result.lname);
          localStorage.setItem('userId', res.result.data.id);
          localStorage.setItem('token', 'Bearer ' + res.result.token)

          _self.router.navigateByUrl('dashboard');
        }
      });
    }

    signUp() {
      this.router.navigateByUrl('signup');
    }

    
  }
