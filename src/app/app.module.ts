import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './layouts/client/client.component';
import { HeaderClientComponent } from './component/header-client/header-client.component';
import { FooterClientComponent } from './component/footer-client/footer-client.component';
import { SliderCarouselComponent } from './component/slider-carousel/slider-carousel.component';
import { MainHomeComponent } from './component/main-home/main-home.component';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { ShopProductComponent } from './pages/client/shop-product/shop-product.component';

// đây là module cung cấp các phương thức để component sử dụng gọi API
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderClientComponent,
    FooterClientComponent,
    SliderCarouselComponent,
    MainHomeComponent,
    HomeClientComponent,
    ShopProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
