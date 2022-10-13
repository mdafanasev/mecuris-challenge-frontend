import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Attribute } from '../attribute.model';

@Component({
  selector: 'mc-entry-attribute',
  templateUrl: './entry-attribute.component.html',
  styleUrls: ['./entry-attribute.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryAttributeComponent {
  @Input() attribute: Attribute | null = null;

  @Output() update = new EventEmitter<string>();
}
