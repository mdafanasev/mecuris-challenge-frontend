import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CatalogItemHttpResponse} from './catalog.dto';
import { CatalogItem } from './catalog.model';

const BASE_URL = '/api/items';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<CatalogItem[]> {
    return this.http.get<CatalogItemHttpResponse[]>(`${BASE_URL}/`);
  }

  restoreAll(): Observable<void> {
    return this.http.post<void>(`${BASE_URL}/restore-all`, {});
  }
}

