import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Attribute } from './attribute.model';

@Injectable()
export class CustomizationService {
  private readonly state = new BehaviorSubject<Attribute[]>([]);

  get attributes(): Observable<Attribute[]> {
    return this.state.asObservable();
  }

  setAttributes(attributes: Attribute[]): void {
    this.state.next(attributes);
  }

  updateAttribute(attributeId: number, newValue: string): void {
    const target = this.state.value.find((attr) => attr.id === attributeId);
    if (target) {
      target.value = newValue;
      this.state.next(this.state.value);
    }
  }
}
