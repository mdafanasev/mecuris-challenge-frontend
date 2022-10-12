import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogItem } from './catalog.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<CatalogItem[]> {
    return this.http.get<CatalogItemHttpResponse[]>(`/api/items/`);
  }
}

interface CatalogItemHttpResponse {
  id: number;
  name: string;
}