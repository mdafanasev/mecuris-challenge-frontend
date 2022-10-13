import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { ViewerModule } from '../viewer/viewer.module';
import { EntryViewerComponent } from './entry-viewer/entry-viewer.component';
import { EntryCustomizerComponent } from './entry-customizer/entry-customizer.component';
import { EntryAttributeComponent } from './entry-attribute/entry-attribute.component';

@NgModule({
  declarations: [EntryPageComponent, EntryViewerComponent, EntryCustomizerComponent, EntryAttributeComponent],
  imports: [CommonModule, EntryRoutingModule, ViewerModule],
})
export class EntryModule {}
