import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Entry } from './entry.model';

@Injectable({ providedIn: 'root' })
export class EntryService {
  constructor(private readonly http: HttpClient) {}

  getEntry(entryId: number): Observable<Entry> {
    return this.http.get<EntryHttpResponse>(`/api/items/${entryId}`).pipe(
      map((resp) => ({
        id: resp.id,
        name: resp.name,
        createdAt: new Date(resp.createdAt),
        updatedAt: new Date(resp.updatedAt),
      })),
    );
  }
}

interface EntryHttpResponse {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
