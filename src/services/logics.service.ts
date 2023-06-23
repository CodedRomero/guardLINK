import { Injectable } from '@angular/core';
import { Location, formatDate } from '@angular/common';

import axios from 'axios';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogicsService {
  baseUrl: string = 'https://power-assisted-capt.000webhostapp.com';

  constructor(private location: Location, private http: HttpClient) {}

  // ==============add item========================
  async postFunction(formData: FormData, endPoint: string, alertMsg: string) {
    // console.log(formData);

    const result = from(
      fetch(this.baseUrl + endPoint, {
        body: formData,
        method: 'POST',
      })
    );
    result.subscribe((e) => {
      // console.log(e.status);
      if (e.status == 200) {
        // this.location.back();
        Swal.fire({
          icon: 'success',
          title: alertMsg,
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    });

    return result;
  }

  getFunction(endPoint: string) {
    // const result = axios.get(this.baseUrl + '/getallcompanies.php');
    const result = axios.get(this.baseUrl + endPoint);

    return result;
  }

  getFunctionWithParams(endpoint: string, params: HttpParams) {
    // const params = new HttpParams()
    //   .set('userEmail', `${form.value.userEmail}`)
    //   .set('userPassword', `${form.value.userPassword}`);
    // this.http.get(this.baseUrl + '/login.php', { params }).subscribe((user: any) => { })
    const result = this.http.get(this.baseUrl + endpoint, { params });
    // .subscribe((user: any) => {
    //   console.log(user);
    // });
    // result.forEach((t) => {
    //   console.log(typeof t);
    // });

    return result;
  }
}
