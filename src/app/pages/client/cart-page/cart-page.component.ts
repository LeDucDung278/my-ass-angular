import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { listCart } from 'src/app/types/Product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: listCart[]
  totalPrice: number
  constructor(
    private localStorageService: LocalStorageService
  ) { 
    this.cartItems = []
    this.totalPrice = 0
  }

  ngOnInit(): void {
    this.cartItems= this.localStorageService.getItem()
    console.log(this.cartItems);
    this.cartItems.map(item => this.totalPrice += this.onToTalPrice(item.price!, item.value!))
  }
  onToTalPrice(price:number, value: number): number{
    return price*value
  }

}
