import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';

@NgModule({
  declarations: [CatalogPageComponent, CatalogItemComponent],
  imports: [CommonModule, CatalogRoutingModule],
})
export class CatalogModule {}
