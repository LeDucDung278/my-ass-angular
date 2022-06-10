import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ShopProductComponent } from './pages/client/shop-product/shop-product.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
