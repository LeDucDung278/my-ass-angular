import { LocalStorageService } from './../../../services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductCart, typeProduct } from 'src/app/types/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: typeProduct
  // Định nghĩa biến lắng nghe giá trị cho value giỏ hàng
  cartItemValue: number =1
  constructor(
    private ProductService: ProductService, // dùng để lấy dữ liệu tham số trên URL
    private activateRoute: ActivatedRoute, // dùng để lấy các phương thức call API P
    private lsService: LocalStorageService, // dùng để lấy các phương thức xử lí LS
    private toastr: ToastrService

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

  onChangeCartValue(event: any) {
    this.cartItemValue = event.target.value
  }

  onAddToCart() {
    // Định nghĩa 1 sp trong giỏ hàng có cấu trúc là gì
    const addItem = {
      ...this.product,
      value: +this.cartItemValue
    }
    // nếu thực hiện như cũ, thì phía component header chứa cart sẽ không lắng nghe được
    // thực hiện gọi lại lsService để component cart có thể lắng nghe thay đổi
    this.lsService.setItems(addItem),
    this.toastr.success('Sản phẩm đã được thêm vào giỏ hàng')
    this.cartItemValue =1
  }

}
