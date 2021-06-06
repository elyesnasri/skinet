import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'http://localhost:501/api/';

  constructor(private httpClient: HttpClient) {}

  getProduct() {
    return this.httpClient.get<IPagination>(this.baseUrl + 'products');
  }
}
