import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { CustomizationService } from '../customization.service';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'mc-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CustomizationService],
})
export class EntryPageComponent {
  entry: Observable<Entry> = this.route.data.pipe(map((data) => data['entry']));

  private destroy = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly entryService: EntryService,
  ) {}

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  removeEntry(entryId: number) {
    if (!this.entry) return;
    this.entryService
      .removeEntry(entryId)
      .pipe(takeUntil(this.destroy))
      .subscribe(() => this.redirectToCatalog());
  }

  redirectToCatalog(): void {
    this.router.navigateByUrl('');
  }
}
