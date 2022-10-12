import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryPageComponent } from './entry-page/entry-page.component';


@NgModule({
  declarations: [
    EntryPageComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
