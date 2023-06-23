import { Location, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogicsService } from 'src/services/logics.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent implements OnInit {
  pdfSrc: any;
  selectedPDF: any;
  company: any;
  user: any;
  applicationForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userContact: new FormControl('', Validators.required),
    // userEmail: new FormControl('', Validators.required),
    userGender: new FormControl('', Validators.required),
    userBirthDate: new FormControl('', Validators.required),
    userLocation: new FormControl('', Validators.required),
    userAddress: new FormControl('', Validators.required),
    userEducation: new FormControl('', Validators.required),
    userIdType: new FormControl('', Validators.required),
    userIdNumber: new FormControl('', Validators.required),
    userIdPdf: new FormControl('', Validators.required),
    userAgreement: new FormControl('', Validators.required),
    requestAccepted: new FormControl('Pending'),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localService: LogicsService,
    private location: Location
  ) {}
  ngOnInit() {
    window.scrollTo(0, 0);
    this.pdfSrc = '';
    // 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    this.route.params.subscribe((e) => {
      this.company = e;
    });
    let data = localStorage.getItem('user');
    let d = JSON.parse(data!);

    if (data != null) {
      d.forEach((e: any) => {
        // console.log(e);
        this.user = e;
        // console.log(this.user);
      });
      this.applicationForm.patchValue({
        userName: this.user['userName'],
        userContact: this.user['userContact'],
        // userEmail: this.user['userEmail'],
      });
    }
  }
  upLoad(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.pdfSrc = reader.result);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // console.log(base64String);
        this.selectedPDF = base64String;
      };

      reader.readAsDataURL(file);
    } else {
      this.pdfSrc = '';
      // 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
      this.selectedPDF = null;
    }
  }
  onSubmit() {
    if (this.user != null) {
      // console.log(this.user['userId']);
      // console.log(this.company['companyId']);
      // console.log(this.applicationForm.value);
      // // form fields
      var formData: any = new FormData();
      formData.append('requestDate', formatDate(Date(), 'yyyy-MM-dd', 'en-US'));
      formData.append('userName', this.applicationForm.value.userName);
      formData.append('userContact', this.applicationForm.value.userContact);
      // formData.append('userEmail', this.applicationForm.value.userEmail);
      formData.append('userGender', this.applicationForm.value.userGender);
      formData.append(
        'userBirthDate',
        this.applicationForm.value.userBirthDate
      );
      formData.append('userLocation', this.applicationForm.value.userLocation);
      formData.append('userAddress', this.applicationForm.value.userAddress);
      formData.append(
        'userEducation',
        this.applicationForm.value.userEducation
      );
      formData.append('userIdType', this.applicationForm.value.userIdType);
      formData.append('userIdNumber', this.applicationForm.value.userIdNumber);
      formData.append('userIdPdf', this.selectedPDF);
      formData.append('userId', this.user['userId']);
      formData.append('companyId', this.company['companyId']);
      formData.append('companyName', this.company['companyName']);

      formData.append(
        'requestAccepted',
        this.applicationForm.value.requestAccepted
      );
      // formData.append('actionDate', formatDate(Date(), 'yyyy-MM-dd', 'en-US'));

      this.localService
        .postFunction(formData, '/request.php', 'Request Submitted')
        .then((e) => {
          this.location.back();
        });
    } else {
      Swal.fire({
        title: 'You are logged out',
        text: 'Log in to continue',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log in',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/register']);
          //  this.authService.logOutUser();
        }
      });
    }
  }
}
