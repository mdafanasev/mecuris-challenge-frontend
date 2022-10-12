import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { Entry } from './entry.model';
import { EntryService } from './entry.service';

@Injectable({ providedIn: 'root' })
export class EntryResolver implements Resolve<Entry> {
  constructor(
    private readonly router: Router,
    private readonly entryService: EntryService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Entry> {
    const entryId = Number(route.paramMap.get('entryId'));
    if (!entryId || isNaN(entryId)) {
      this.router.navigate([]);
      return EMPTY;
    }
    return this.entryService.getEntry(entryId).pipe(
      catchError((err) => {
        this.router.navigate([]);
        return throwError(() => err);
      }),
    );
  }
}
