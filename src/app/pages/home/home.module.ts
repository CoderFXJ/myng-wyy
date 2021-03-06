import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { HomeComponent } from './home.component';
import { WyCarouselComponent } from './component/wy-carousel/wy-carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    WyCarouselComponent
  ],
  imports: [
    HomeRoutingModule,
    ShareModule
  ],
  exports:[
    
  ]
})
export class HomeModule { }
