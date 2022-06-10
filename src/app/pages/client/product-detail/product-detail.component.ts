import { ProductService } from 'src/app/services/product.service';
import { typeProduct } from 'src/app/types/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: typeProduct
  constructor(
    private ProductService: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this.product = {
      _id: '', 
      name: '',
      img: '',
      price: 0,
      sale_price: 0,
      desc: '',
      status: 0
    }
   }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.ProductService.listOneProduct(idFromUrl).subscribe(data => {
      this.product = data
    })
  }

}
