import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { typeProduct } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listProduct(): Observable<typeProduct[]> {
    return this.http.get<typeProduct[]>(environment.product)
  }
  listOneProduct(id: string): Observable<typeProduct> {
    return this.http.get<typeProduct>(`${environment.product}/${id}`)
  }
  deleteProduct (id: string): Observable<any> {
    return this.http.delete(`${environment.product}/${id}`)
  }
  createProduct (data: typeProduct): Observable<typeProduct> {
    return this.http.post<typeProduct>(`${environment.product}`,data)
  }
  editProduct (id:string ,data:typeProduct) : Observable<typeProduct> {
    return this.http.put<typeProduct>(`${environment.product}/${id}`,data)
  }
}
