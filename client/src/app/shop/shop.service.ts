import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId?.id) {
      params = params.append('brandId', shopParams.brandId.id.toString());
    }

    if (shopParams.typeId?.id) {
      params = params.append('typeId', shopParams.typeId.id.toString());
    }

    params = params.append('sort', shopParams.sort.value);
    params = params.append('pageIndex', shopParams.pageIndex.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());

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
