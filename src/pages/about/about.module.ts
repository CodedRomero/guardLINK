import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CoreModule } from 'src/core/core.modules';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NavbarModule,
    FooterModule,
    CoreModule,
  ],
})
export class AboutModule {}
