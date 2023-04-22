import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CoreModule } from 'src/core/core.modules';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NavbarModule,
    FooterModule,
    CoreModule,
  ],
})
export class ContactModule {}
