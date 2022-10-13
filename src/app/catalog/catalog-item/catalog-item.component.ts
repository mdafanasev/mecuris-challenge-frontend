import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CatalogItem } from '../catalog.model';

@Component({
  selector: 'mc-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogItemComponent {
  @Input() item: CatalogItem | null = null;
}
