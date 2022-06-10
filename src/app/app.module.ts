import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './layouts/client/client.component';
import { HeaderClientComponent } from './component/header-client/header-client.component';
import { FooterClientComponent } from './component/footer-client/footer-client.component';
import { SliderCarouselComponent } from './component/slider-carousel/slider-carousel.component';
import { MainHomeComponent } from './component/main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderClientComponent,
    FooterClientComponent,
    SliderCarouselComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
