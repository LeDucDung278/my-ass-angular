import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { typeProduct } from 'src/app/types/Product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: typeProduct[]

  constructor(
    private productService: ProductService
  ) { 
    this.products = []
  }

  ngOnInit(): void {
    this.GetListProducts()
  }

  GetListProducts() {
    this.productService.listProduct().subscribe((data) =>{
      this.products = data
    })
  }
  onDelete(id: string) {
    // cofirm
    const comfirmDelete = confirm('Bạn chắc chắn muốn xóa')
    if(comfirmDelete && id){
      this.productService.deleteProduct(id).subscribe(data =>{
        // Cập nhật dannh sách
        this.GetListProducts()
      })
      console.log(id);
      
    }
  }
}
