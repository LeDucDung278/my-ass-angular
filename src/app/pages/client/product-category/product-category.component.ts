import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { typeCategory, typeCateProduct } from 'src/app/types/Category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productCategory: typeCateProduct
  categories: typeCategory[]
  constructor(
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute
  ) {
    this.productCategory = {
      category: {
        _id: "",
        name: "",
        status: 0
    },
    products: []
    }
    this.categories = []
   }

  ngOnInit(): void {
    this.GetProductCate()
    this.GetListCategory()
  }

  GetProductCate() {
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.categoryService.listOneCategory(idFromUrl).subscribe(data=>{
      this.productCategory = data
      console.log(data)
    })
  }

  GetListCategory() {
    this.categoryService.listCategories().subscribe((data)=>{
      this.categories = data
    })
  }

}
