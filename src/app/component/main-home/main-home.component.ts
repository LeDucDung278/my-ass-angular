import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { typeCategory } from 'src/app/types/Category';
import { typeProduct } from 'src/app/types/Product';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  categories: typeCategory[]
  products: typeProduct[]
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { 
    this.categories = []
    this.products = []
  }

  ngOnInit(): void {
    this.GetListCategory()
    this.GetListProducts()
   
  }

  GetListCategory() {
    this.categoryService.listCategories().subscribe((data)=>{
      this.categories = data
    })
  }

  GetListProducts() {
    this.productService.listProduct().subscribe((data) =>{
      this.products = data
    })
  }
  
}
