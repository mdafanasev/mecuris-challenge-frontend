import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CustomizationService } from '../customization.service';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'mc-entry-customizer',
  templateUrl: './entry-customizer.component.html',
  styleUrls: ['./entry-customizer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryCustomizerComponent implements OnChanges {
  @Input() entry: Entry | null = null;

  constructor(
    private readonly customizationService: CustomizationService,
    private readonly entryService: EntryService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entry']) {
      const attributes = changes['entry'].currentValue.attributes;
      this.customizationService.initialize(attributes);
    }
  }

  updateAttribute(attributeId: number, newValue: string) {
    if (!this.entry) return;
    this.customizationService.updateAttribute(attributeId, newValue);
    this.entryService
      .updateAttribute(this.entry.id, attributeId, newValue)
      .subscribe();
  }
}
