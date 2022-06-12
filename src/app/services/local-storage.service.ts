import { ProductCart } from 'src/app/types/Product';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  // 1. Đinh nghĩa việc lắng nghe thay đổi bằng cách khởi tạo 1 Subject
  // Trong subject sẽ có phương thức bắt sự kiện thay đổi để phát hành dộng tiếp theo
  private storageSubject = new Subject<string>()

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }

  // Tất cả các xử lý của LS sẽ thực hiện ở đây , để kích hoạt việc lắng nghe
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  setItems(addItem: ProductCart){
    // Nghiệp vụ thêm sp vào giỏ
    //1. Lấy ra toàn bộ sp trong giỏ
    const cartItems = this.getItem()
    // 2. kiểm tra trong giỏ đã có phần tử có id giống cartItem chưa
    const existItem = cartItems.find((item:ProductCart) => item._id === addItem._id)
    
    if (!existItem) {
      cartItems.push(addItem)
    }else {
      existItem.value += addItem.value
    }

    localStorage.setItem('cart', JSON.stringify(cartItems))
    //3. Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem Này
    this.storageSubject.next('')
    // thì watchStorage sẽ được phát sự kiện vào subscribe
  }
}


