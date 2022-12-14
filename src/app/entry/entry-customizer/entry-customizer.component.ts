import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CustomizationService } from '../customization.service';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'mc-entry-customizer',
  templateUrl: './entry-customizer.component.html',
  styleUrls: ['./entry-customizer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryCustomizerComponent implements OnChanges, OnDestroy {
  @Input() entry: Entry | null = null;

  private destroy = new Subject<void>();

  constructor(
    private readonly customizationService: CustomizationService,
    private readonly entryService: EntryService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entry']) {
      const attributes = changes['entry'].currentValue.attributes;
      this.customizationService.setAttributes(attributes);
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  updateAttribute(attributeId: number, newValue: string): void {
    if (!this.entry) return;
    this.customizationService.updateAttribute(attributeId, newValue);
    this.entryService
      .updateAttribute(this.entry.id, attributeId, newValue)
      .pipe(takeUntil(this.destroy))
      .subscribe();
  }
}
