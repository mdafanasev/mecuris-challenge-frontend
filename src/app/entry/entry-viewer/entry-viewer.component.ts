import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Viewer3DObject } from 'src/app/viewer/viewer.model';
import { Entry } from '../entry.model';

@Component({
  selector: 'mc-entry-viewer',
  templateUrl: './entry-viewer.component.html',
  styleUrls: ['./entry-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryViewerComponent {
  @Input() entryData: Entry | null = null;

  get object(): Viewer3DObject | null {
    if (!this.entryData) {
      return null;
    }
    return { objectUrl: this.entryData.modelUrl };
  }
}
