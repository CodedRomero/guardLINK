import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/authservice.service';
import { LogicsService } from 'src/services/logics.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: [] = [];
  requests: any[] = [];
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private localService: LogicsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let data = localStorage.getItem('user');
    this.user = JSON.parse(data!);
    // console.log(this.user);
    this.getRequest();
  }
  logOut() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log out',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logOutUser();
      }
    });
  }

  getRequest() {
    this.loading = true;
    this.user.forEach((e) => {
      // console.log(e);
      // getuserrequests.php
      const params = new HttpParams()
        // .set('userEmail', e['userEmail'])
        .set('userId', e['userId']);
      this.localService
        .getFunctionWithParams('/getuserrequests.php', params)
        .subscribe(
          (e) => {
            this.loading = false;
            if (typeof e == 'string') {
              this.requests = [];
            } else {
              this.requests = [];
              this.requests = [...Object.values(e)];
            }

            // this.requests = e;
            // console.log(this.requests);
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        );
    });
  }

  onDelete(request: any) {
    var formData: any = new FormData();
    if (request['requestAccepted'] == 'Accepted') {
      // console.log(request['requestId']);
      // details;
      this.router.navigate(['/details', request['requestId']]);
    } else {
      Swal.fire({
        title: 'Cancel request?',
        text: 'Request would be permanently cancelled and deleted.Continue?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true;
          formData.append('requestId', request['requestId']);
          this.localService
            .postFunction(formData, '/deleterequest.php', 'Request deleted')
            .then((e) => {
              this.loading = false;
              this.getRequest();
            });
        }
      });
    }
  }
}
