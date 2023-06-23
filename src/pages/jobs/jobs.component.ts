import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogicsService } from 'src/services/logics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  filterText: any;
  selectedName: string = 'Cleaning & Janitorial Services';
  companies: any[] = [];
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localService: LogicsService
  ) {}
  // 'Others (General Goods & Services)',
  // 'Banking & Deposite Taking',
  // 'Cleaning & Janitorial Services',
  // 'Construction Company',
  // 'Consultancy Company',
  // 'Cosmetic & Makeup',
  // 'Delivery & Courier Services',
  // 'Food Production',
  // 'Hospitality Company',
  // 'Hotel & Hospitality',
  // 'Manufacturing Company',
  // 'Pharmaceutical Company',
  // 'Recruitment Agencies',
  // 'Retail Grocery Shop',
  // 'Supermarkets',
  // 'Transport Services',
  // 'Veterinary Services',
  // 'Waste Management'

  featuredJobs = [
    {
      name: 'Cleaning & Janitorial Services',
      link: '',
    },
    {
      name: 'Transport Services',
      link: '',
    },
    {
      name: 'Food Production',
      link: '',
    },
    {
      name: 'Hotel & Hospitality',
      link: '',
    },
    {
      name: 'Supermarkets',
      link: '',
    },
    {
      name: 'Waste Management',
      link: '',
    },
    {
      name: 'Delivery & Courier Services',
      link: '',
    },
  ];
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.subscribe((e) => {
      this.filterText = e;
      // console.log(this.filterText['name']);
      this.selectedName = this.filterText['name'];
      this.getCompanies(this.filterText['name']);
    });
  }

  viewCompanyDetails(companyDetails: any) {
    this.router.navigate(['/apply', companyDetails]);
  }

  getCompanies(payload: string) {
    this.loading = true;

    if (payload == undefined) {
      const params = new HttpParams().set(
        'companyCategory',
        'Cleaning & Janitorial Services'
      );

      this.localService
        .getFunctionWithParams('/getallcompanies.php', params)
        .subscribe(
          (res) => {
            this.loading = false;
            // this.companies.push(res);
            // console.log(this.companies);
            if (typeof res == 'string') {
              this.companies = [];
            } else {
              this.companies = [];
              this.companies = [...Object.values(res)];
            }
          },
          (error: Error) => {
            console.log(error);
          }
        );
    } else {
      const params = new HttpParams().set('companyCategory', `${payload}`);

      this.localService
        .getFunctionWithParams('/getallcompanies.php', params)
        .subscribe((res) => {
          this.loading = false;
          // this.companies.push(res);
          if (typeof res == 'string') {
            this.companies = [];
          } else {
            this.companies = [];
            this.companies = [...Object.values(res)];
          }
          // console.log(this.companies);
        });
    }
  }

  getSelectedValue(event: any) {
    this.loading = true;
    const params = new HttpParams().set(
      'companyCategory',
      `${event.target.value}`
    );

    this.localService
      .getFunctionWithParams('/getallcompanies.php', params)
      .subscribe((res) => {
        this.loading = false;
        if (typeof res == 'string') {
          this.companies = [];
        } else {
          this.companies = [];
          this.companies = [...Object.values(res)];
        }
        // console.log(typeof res);
        // let f = JSON.stringify(res);
        // console.log(f.);
        // console.log();

        // this.companies.push(res);
        // console.log(this.companies.l);
      });
  }
}
