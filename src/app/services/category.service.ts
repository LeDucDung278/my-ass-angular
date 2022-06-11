import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { typeCategory, typeCateProduct } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Khai báo http để có đối tượng HttpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) { }

  // Kiểu dữ liệu Observale sẽ giúp lắng nghe API trả về kết quả
  listCategories(): Observable<typeCategory[]> {
    return this.http.get<typeCategory[]>(environment.category)
  }
  listOneCategory(id: string): Observable<typeCateProduct> {
    return this.http.get<typeCateProduct>(`${environment.category}/${id}`)
  }
}
