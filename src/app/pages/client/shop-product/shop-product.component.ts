import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { typeCategory } from 'src/app/types/Category';
import { typeProduct } from 'src/app/types/Product';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {
  products: typeProduct[]
  categories: typeCategory[]
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.products = []
    this.categories = []
   }

  ngOnInit(): void {
    this.GetListProducts()
    this.GetListCategory()
  }

  GetListProducts() {
    this.productService.listProduct().subscribe((data) =>{
      this.products = data
    })
  }
  GetListCategory() {
    this.categoryService.listCategories().subscribe((data)=>{
      this.categories = data
    })
  }
}
