import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LogicsService } from 'src/services/logics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  subscribe_email: string = '';
  constructor(private localService: LogicsService) {}
  ngOnInit(): void {}

  submit() {
    var formData: any = new FormData();
    formData.append('addDate', formatDate(Date(), 'yyyy-MM-dd', 'en-US'));
    formData.append('subscribeEmail', this.subscribe_email);
    // console.log(this.subscribe_email);
    this.localService
      .postFunction(formData, '/addsubscription.php', 'Email Added')
      .then((e) => {
        this.subscribe_email = '';
      });
  }
}
