import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  showLogin = true;
  showForgotPassword = false;

  onShowLogin() {
    this.showLogin = true;
  }
  onShowRegister() {
    this.showLogin = false;
  }

  onForgotPassword() {
    this.showForgotPassword = true;
  }
}
