import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogicsService } from 'src/services/logics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private localService: LogicsService) {}
  // form control
  addNewFeedBack = new FormGroup({
    userName: new FormControl('', Validators.required),
    userContact: new FormControl('', Validators.required),
    userEmail: new FormControl(''),
    userMessage: new FormControl('', Validators.required),
  });

  onSubmit() {
    var formData: any = new FormData();
    formData.append('addDate', formatDate(Date(), 'yyyy-MM-dd', 'en-US'));
    formData.append('userName', this.addNewFeedBack.value.userEmail);
    formData.append('userContact', this.addNewFeedBack.value.userContact);
    formData.append('userEmail', this.addNewFeedBack.value.userEmail);
    formData.append('userMessage', this.addNewFeedBack.value.userMessage);
    this.localService
      .postFunction(formData, '/addfeedback.php', 'Feedback Submitted')
      .then((e) => {
        this.addNewFeedBack.reset();
      });
  }
}
