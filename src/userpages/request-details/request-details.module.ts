import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CoreModule } from 'src/core/core.modules';
import { RequestDetailsComponent } from './request-details.component';
import { RequestDetailsRoutingModule } from './request-details.routing';

@NgModule({
  declarations: [RequestDetailsComponent],
  imports: [
    CommonModule,
    RequestDetailsRoutingModule,
    NavbarModule,
    FooterModule,
    CoreModule,
    RouterModule,
  ],
  // exports: [JobsComponent],
})
export class RequestDetailsModule {}
