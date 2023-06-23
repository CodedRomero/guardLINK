import { formatDate } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  showLogin = true;
  showForgotPassword = false;
  forgot_email: string = '';
  // register form control
  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userContact: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  // login form control
  loginForm = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    const user = localStorage.getItem('user');

    const d = JSON.parse(user!);
    if (d != null) {
      this.router.navigate(['/profile']);
    }
    //  return false;
  }
  onRegister() {
    this.authService.registerNewUser(this.registerForm);
  }

  onLogIn() {
    this.authService.logInUser(this.loginForm);
  }
  onShowLogin() {
    this.showLogin = true;
  }
  onShowRegister() {
    this.showLogin = false;
  }

  onForgotPassword() {
    this.showForgotPassword = true;
  }

  onResetPassword() {
    console.log(this.forgot_email);
    var formData: any = new FormData();
    formData.append('userEmail', this.forgot_email);
    this.authService.resetPassword(formData);
  }
}
