import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { ViewerModule } from '../viewer/viewer.module';
import { EntryViewerComponent } from './entry-viewer/entry-viewer.component';

@NgModule({
  declarations: [EntryPageComponent, EntryViewerComponent],
  imports: [CommonModule, EntryRoutingModule, ViewerModule],
})
export class EntryModule {}
