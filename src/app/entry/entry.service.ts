import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AttributeType } from './attribute.model';
import { Entry } from './entry.model';

@Injectable({ providedIn: 'root' })
export class EntryService {
  constructor(private readonly http: HttpClient) {}

  getEntry(entryId: number): Observable<Entry> {
    return this.http
      .get<EntryHttpResponse>(`/api/items/${entryId}`)
      .pipe(map((resp) => this.mapRespToEntry(resp)));
  }

  private mapRespToEntry(resp: EntryHttpResponse): Entry {
    return {
      id: resp.id,
      name: resp.name,
      modelUrl: resp.modelUrl,
      previewUrl: resp.previewUrl,
      createdAt: new Date(resp.createdAt),
      updatedAt: new Date(resp.updatedAt),
      attributes: resp.attributes.map((attr) => ({
        id: attr.id,
        type: attr.type as AttributeType,
        name: attr.name,
        hint: attr.hint,
        target: attr.target,
        value: attr.value,
        updatedAt: new Date(attr.updatedAt),
      })),
    };
  }
}

interface EntryHttpResponse {
  id: number;
  name: string;
  modelUrl: string;
  previewUrl: string;
  createdAt: string;
  updatedAt: string;
  attributes: {
    id: number;
    type: string;
    name: string;
    hint: string;
    target: string;
    value: string;
    updatedAt: string;
  }[];
}
