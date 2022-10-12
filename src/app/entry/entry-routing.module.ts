import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { EntryResolver } from './entry.resolver';

const routes: Routes = [
  {
    path: '',
    component: EntryPageComponent,
    resolve: { entry: EntryResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryRoutingModule {}
