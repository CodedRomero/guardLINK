import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogicsService } from 'src/services/logics.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  companies: any[] = [];
  loading: boolean = false;
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

  constructor(private localService: LogicsService, private router: Router) {}
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.loading = true;
    const params = new HttpParams().set(
      'companyCategory',
      'Cleaning & Janitorial Services'
    );

    this.localService
      .getFunctionWithParams('/getallcompanies.php', params)
      .subscribe((res) => {
        this.loading = false;
        // this.companies.push(res);
        this.companies = [...Object.values(res)];
        // console.log(this.companies.length);
      });
    // this.localService.getFunction('/getallcompanies.php').then((result) => {
    //   this.loading = false;
    //   // console.log(result.data.length);
    //   this.companies = result.data;
    //   // console.log(this.companies.length);
    // });
  }

  viewCompanyDetails(companyDetails: any) {
    this.router.navigate(['/apply', companyDetails]);
  }

  getCategory(item: any) {
    // console.log(item['name']);
    this.router.navigate(['/jobs', item]);
  }
}
