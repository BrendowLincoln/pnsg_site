import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SiteHeaderComponent } from './shared/components/site-header/site-header.component';
import { SiteCarouselComponent } from './shared/components/site-carousel/site-carousel.component';



@NgModule({
  declarations: [
    HomeComponent,
    SiteHeaderComponent,
    SiteCarouselComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
}) 
export class PublicModule { }
