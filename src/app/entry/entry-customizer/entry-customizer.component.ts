import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Attribute } from '../attribute.model';
import { CustomizationService } from '../customization.service';

@Component({
  selector: 'mc-entry-customizer',
  templateUrl: './entry-customizer.component.html',
  styleUrls: ['./entry-customizer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryCustomizerComponent implements OnChanges {
  @Input() attributes: Attribute[] = [];

  constructor(private readonly customizationService: CustomizationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['attributes']) {
      this.customizationService.initialize(changes['attributes'].currentValue);
    }
  }

  updateAttribute(attributeId: number, newValue: string) {
    this.customizationService.updateAttribute(attributeId, newValue);
  }
}
