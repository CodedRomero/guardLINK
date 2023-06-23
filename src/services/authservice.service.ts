import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://power-assisted-capt.000webhostapp.com';

  constructor(private http: HttpClient, private router: Router) {}

  // localStorage.setItem('token','xhja787')
  //  localStorage.getItem('token')
  // localStorage.clear()
  // localStorage.removeItem(key);
  registerNewUser(form: any) {
    // console.log(this.registerForm.value);
    var formData: any = new FormData();
    formData.append('addDate', formatDate(Date(), 'yyyy-MM-dd', 'en-US'));
    formData.append('lastLogIn', formatDate(Date(), 'yyyy-MM-dd', 'en-US'));
    formData.append('userName', form.value.userName);
    formData.append('userContact', form.value.userContact);
    formData.append('userEmail', form.value.userEmail);
    formData.append('userPassword', form.value.userPassword);
    const params = new HttpParams()
      .set('userEmail', `${form.value.userEmail}`)
      .set('userPassword', `${form.value.userPassword}`);
    this.http.get(this.baseUrl + '/login.php', { params }).subscribe((user) => {
      // console.log(typeof e);
      // console.log(e);
      if (typeof user == 'object') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Account Already exist',
        });
      } else {
        console.log('no user');

        const result = from(
          fetch(this.baseUrl + '/register.php', {
            body: formData,
            method: 'POST',
          })
        );
        result.subscribe((e) => {
          const d = JSON.stringify(user);

          // console.log(e.status);
          if (e.status == 200) {
            this.logInUser(form);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        });
      }
    });
  }

  // login user
  async logInUser(form: any) {
    const params = new HttpParams()
      .set('userEmail', `${form.value.userEmail}`)
      .set('userPassword', `${form.value.userPassword}`)
      .set('lastLogIn', formatDate(Date(), 'yyyy-MM-dd', 'en-US'));
    // console.log(params);
    // const result = axios.get(this.baseUrl + endPoint, { params });
    // result.then((e) => {
    //   console.log(e.data);
    // });
    // return result;
    return this.http.get(this.baseUrl + '/login.php', { params }).subscribe(
      (response) => {
        const d = JSON.stringify(response);
        if (typeof response == 'object') {
          localStorage.setItem('user', d);
          this.router.navigate(['/profile']);

          // console.log(response);
        } else {
          return Swal.fire({
            icon: 'error',
            title: response,
            text: 'Log in details are not correct.',
          });
        }
        return response;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'Something went wrong!',
        });
        return error;
      }
    );
  }

  logOutUser() {
    localStorage.removeItem('user');
    this.router.navigate(['/register']);
    Swal.fire('Logged Out!', 'You have been logged out.', 'success');
  }

  resetPassword(formData: FormData) {
    const result = from(
      fetch(this.baseUrl + '/register.php', {
        body: formData,
        method: 'POST',
      })
    );
    result.subscribe((e) => {
      console.log(e);
    });
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');

    const d = JSON.parse(user!);
    // console.log(d);
    if (d != null) {
      return true;
    }
    return false;
  }
}
