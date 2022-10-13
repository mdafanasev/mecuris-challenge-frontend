import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Attribute } from '../attribute.model';

const COLORS = [
  '#ffbf00',
  '#5db58c',
  '#e03215',
  '#2592b3',
  '#ff50b2',
];

@Component({
  selector: 'mc-entry-attribute',
  templateUrl: './entry-attribute.component.html',
  styleUrls: ['./entry-attribute.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryAttributeComponent {
  @Input() attribute: Attribute | null = null;

  @Output() update = new EventEmitter<string>();

  readonly colors = COLORS;
}
