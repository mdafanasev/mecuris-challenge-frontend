import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AttributeType } from './attribute.model';
import { EntryHttpResponse } from './entry.dto';
import { Entry } from './entry.model';

@Injectable({ providedIn: 'root' })
export class EntryService {
  constructor(private readonly http: HttpClient) {}

  getEntry(entryId: number): Observable<Entry> {
    return this.http
      .get<EntryHttpResponse>(`/api/items/${entryId}`)
      .pipe(map((resp) => this.mapRespToEntry(resp)));
  }

  updateAttribute(
    entryId: number,
    attributeId: number,
    newValue: string,
  ): Observable<void> {
    return this.http.patch<void>(
      `/api/items/${entryId}/attributes/${attributeId}`,
      { value: newValue },
    );
  }

  removeEntry(entryId: number): Observable<void> {
    return this.http.delete<void>(`/api/items/${entryId}`);
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
