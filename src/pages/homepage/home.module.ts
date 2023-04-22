import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/core/core.modules';
import { HomepageComponent } from './homepage.component';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FeaturedModule } from 'src/components/featured/featuredModule';
import { FooterModule } from 'src/components/footer/footer.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    NavbarModule,
    FeaturedModule,
    FooterModule,
  ],
})
export class HomeModule {}
