import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) {}

  getProduct() {
    return this.httpClient.get<IPagination>(
      this.baseUrl + 'products?pageSize=50'
    );
  }

  getBrands() {
    return this.httpClient.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.httpClient.get<IType[]>(this.baseUrl + 'products/types');
  }
}
