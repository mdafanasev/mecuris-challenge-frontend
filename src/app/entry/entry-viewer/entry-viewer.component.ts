import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { Customization, Viewer3DObject } from 'src/app/viewer/viewer.model';
import { Attribute } from '../attribute.model';
import { CustomizationService } from '../customization.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'mc-entry-viewer',
  templateUrl: './entry-viewer.component.html',
  styleUrls: ['./entry-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryViewerComponent {
  @Input() entry: Entry | null = null;

  customizations = this.customizationService.attributes.pipe(
    map((attributes) => this.mapAttributesToCustomizations(attributes)),
  );

  get object(): Viewer3DObject | null {
    if (!this.entry) {
      return null;
    }
    return { objectUrl: this.entry.modelUrl };
  }

  constructor(private readonly customizationService: CustomizationService) {}

  private mapAttributesToCustomizations(
    attributes: Attribute[],
  ): Customization[] {
    return attributes.map((attr) => ({
      type: attr.type,
      target: attr.target,
      value: attr.value,
    }));
  }
}
