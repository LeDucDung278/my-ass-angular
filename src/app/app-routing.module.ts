import { ProductCategoryComponent } from './pages/client/product-category/product-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ShopProductComponent } from './pages/client/shop-product/shop-product.component';
import { LoginComponent } from './pages/client/auth/login/login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/product/table/table.component';
import { FormComponent } from './component/product/form/form.component';
import { TableCateComponent } from './component/category/table-cate/table-cate.component';
import { CartPageComponent } from './pages/client/cart-page/cart-page.component';
import { TableUserComponent } from './component/user/table-user/table-user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeClientComponent
      },
      {
        path: 'shop-product',
        component: ShopProductComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'category/:id',
        component: ProductCategoryComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'cart-shopping',
        component: CartPageComponent
      }
    ]
  },{
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'product',
        component: TableComponent
      },
      {
        path: 'product/create',
        component: FormComponent
      },
      {
        path: 'product/edit/:id',
        component: FormComponent
      },
      {
        path: 'category',
        component: TableCateComponent
      },
      {
        path: 'user',
        component: TableUserComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
