import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'mc-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPageComponent {
  items = this.catalogService.getItems();

  constructor(private readonly catalogService: CatalogService) {}
}
