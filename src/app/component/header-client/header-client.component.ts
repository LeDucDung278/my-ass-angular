import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  cartItems: ProductCart[]
  constructor(
    private lsService: LocalStorageService
  ) { 
    this.cartItems = []
  }

  ngOnInit(): void {
    this.onSetCart()
    this.cartItems = this.lsService.getItem()
    // khi setItem được chạy, thì next('') cũng được chạy  -> có thể subscribe
    this.lsService.watchStorage().subscribe(data => {
      this.onSetCart()
    })
  }
  onSetCart() {
    this.cartItems = this.lsService.getItem()
  }

}
