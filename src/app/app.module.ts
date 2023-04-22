import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HomeModule } from 'src/pages/homepage/home.module';
import { FeaturedModule } from 'src/components/featured/featuredModule';
import { JobsModule } from 'src/pages/jobs/jobs.module';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { FeaturedComponent } from 'src/components/featured/featured.component';
import { HomeModule } from 'src/pages/homepage/home.module';
import { NavbarModule } from 'src/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomepageComponent,
    // NavbarComponent,
    // FooterComponent,
    // FeaturedComponent,
    // FeaturedModule,
    HomeModule,
    // NavbarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
