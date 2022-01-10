import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Could also use the remote data source
  // private dataSource = 'https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json';
  private dataSource = 'assets/data.json';

  /**
   * @constructor
   * @param {HttpClient} http HttpClient.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Get product list.
   */
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataSource);
  }
}
