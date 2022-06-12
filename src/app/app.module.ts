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

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// đây là module cung cấp các phương thức để component sử dụng gọi API
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductCategoryComponent } from './pages/client/product-category/product-category.component';
import { LoginComponent } from './pages/client/auth/login/login.component'

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
    ProductDetailComponent,
    ProductCategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
