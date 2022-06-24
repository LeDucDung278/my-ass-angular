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
import { LoginComponent } from './pages/client/auth/login/login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/product/table/table.component';
import { FormComponent } from './component/product/form/form.component';
import { ShowValidateComponent } from './show-validate/show-validate.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { TableCateComponent } from './component/category/table-cate/table-cate.component';
import { CartPageComponent } from './pages/client/cart-page/cart-page.component';
import { TableUserComponent } from './component/user/table-user/table-user.component';
import { BlogComponent } from './pages/client/blog/blog.component';

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
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    TableComponent,
    FormComponent,
    ShowValidateComponent,
    TableCateComponent,
    CartPageComponent,
    TableUserComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
