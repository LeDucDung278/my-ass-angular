import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  productForm: FormGroup
  productId: string
  constructor(
    private productService: ProductService, // cac phương thức call API
    private router: Router, // ĐIỀU HƯỚNG
    private activatedRoute: ActivatedRoute // LẤY CÁC THAM SỐ TRÊN URL
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      img: new FormControl('',[
        Validators.required,
      ]),
      price: new FormControl('',[
        Validators.required,
      ]),
      sale_price: new FormControl('',[
        Validators.required,
      ]),
      desc: new FormControl('',[
        Validators.required,
      ]),
      status: new FormControl('',[
        Validators.required,
      ]),
    })
    this.productId = ''
   }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];

        if (this.productId) {
            this.productService.listOneProduct(this.productId).subscribe(data=>{
                this.productForm.patchValue({
                    name: data.name,
                    img: data.img,
                    sale_price: data.sale_price,
                    desc: data.desc,
                    price: data.price,
                    status: data.status
                })
            })
        }
  }

    redirectToList () {
        this.router.navigateByUrl('/admin/product')
    }

    onSubmit(){
      console.log(this.productForm.value)
      // nhận dữ liệu từ form => thí productForm.value
      const data = this.productForm.value
      
      if(this.productId !== '' && this.productId !== undefined){
          return this.productService.editProduct(this.productId,data).subscribe(data =>{
              this.redirectToList()
          })
      }

      // call api tạo mới
      return this.productService.createProduct(data).subscribe(data =>{
          // quay ljai danh sách products
          // this.router.navigate(['admin', 'products'])
          this.redirectToList()
          // khi đã quay về list thid ngOnInit trong list sẽ lại được chạy và call api
          // lấy dữ liệu mới
      })
  }

}
