import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer.component';

@NgModule({
  declarations: [ViewerComponent],
  imports: [CommonModule],
  exports: [ViewerComponent],
})
export class ViewerModule {}
