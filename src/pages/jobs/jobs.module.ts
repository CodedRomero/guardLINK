import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { Routes } from '@angular/router';
import { JobsRoutingModule } from './jobs.routing';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CoreModule } from 'src/core/core.modules';

@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NavbarModule,
    FooterModule,
    CoreModule,
    RouterModule,
  ],
  // exports: [JobsComponent],
})
export class JobsModule {}
