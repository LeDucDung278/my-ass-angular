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
}
