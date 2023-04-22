import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CoreModule } from 'src/core/core.modules';
import { PolicyComponent } from './policy.component';
import { PolicyRoutingModule } from './policy.routing';

@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    NavbarModule,
    FooterModule,
    CoreModule,
    RouterModule,
  ],
  // exports: [JobsComponent],
})
export class PolicyModule {}
