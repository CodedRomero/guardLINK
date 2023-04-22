import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/core/core.modules';
import { FeaturedComponent } from './featured.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeaturedComponent],
  imports: [CommonModule, HttpClientModule, CoreModule, RouterModule],
  exports: [FeaturedComponent],
})
export class FeaturedModule {}
