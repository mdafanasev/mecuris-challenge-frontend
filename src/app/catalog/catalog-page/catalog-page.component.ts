import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'mc-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPageComponent implements OnDestroy {
  items = this.catalogService.getItems();

  private destroy = new Subject<void>();

  constructor(
    private readonly catalogService: CatalogService,
    private readonly cdr: ChangeDetectorRef,
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
    this.items = this.catalogService.getItems();
    this.cdr.markForCheck();
  }
}
