import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CatalogItem } from '../catalog.model';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'mc-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPageComponent implements OnDestroy {
  items$: Observable<CatalogItem[]> = this.catalogService.getItems();

  private destroy = new Subject<void>();

  constructor(
    private readonly catalogService: CatalogService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  restoreAll(): void {
    this.catalogService
      .restoreAll()
      .pipe(takeUntil(this.destroy))
      .subscribe(() => this.reloadItems());
  }

  private reloadItems(): void {
    this.items$ = this.catalogService.getItems();
    this.changeDetectorRef.markForCheck();
  }
}
