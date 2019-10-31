import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/data/products.json');
  }

  getById(productId: number): Observable<Product> {
    return this.httpClient.get<Product[]>('/data/products.json')
      .pipe(
        map(products => products.find(p => p.id === productId) as Product)
      );
  }
}
