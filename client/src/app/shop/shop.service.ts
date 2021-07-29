import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(brandId?: number, typeId?: number) {
    const params = new HttpParams();

    if (brandId) {
      params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params.append('typeId', typeId.toString());
    }

    return this.httpClient
      .get<IPagination>(this.baseUrl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }

  getBrands() {
    return this.httpClient.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.httpClient.get<IType[]>(this.baseUrl + 'products/types');
  }
}
