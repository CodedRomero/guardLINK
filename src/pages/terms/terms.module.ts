import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CoreModule } from 'src/core/core.modules';

import { TermsComponent } from './terms.component';
import { TermsRoutingModule } from './terms.routing';

@NgModule({
  declarations: [TermsComponent],
  imports: [
    CommonModule,
    TermsRoutingModule,
    NavbarModule,
    FooterModule,
    CoreModule,
    RouterModule,
  ],
  // exports: [JobsComponent],
})
export class TermsModule {}
