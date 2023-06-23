import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CoreModule } from 'src/core/core.modules';
import { ApplyComponent } from './apply.component';
import { ApplyRoutingModule } from './apply.routing';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ApplyComponent],
  imports: [
    CommonModule,
    ApplyRoutingModule,
    NavbarModule,
    FooterModule,
    CoreModule,
    RouterModule,
    PdfViewerModule,
  ],
  // exports: [JobsComponent],
})
export class ApplyModule {}
