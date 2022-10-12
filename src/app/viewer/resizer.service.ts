import { ElementRef, Inject, Injectable } from '@angular/core';
import { ReplaySubject, throttleTime } from 'rxjs';
import { Size } from './viewer.model';

const THROTTLE_TIME = 500;

@Injectable()
export class ResizerService {
  private readonly sizeChanges = new ReplaySubject<Size>(1);

  readonly size = this.sizeChanges
    .asObservable()
    .pipe(throttleTime(THROTTLE_TIME));

  constructor(@Inject(ElementRef) element: ElementRef<Element>) {
    if (element.nativeElement) {
      const observer = new ResizeObserver((entries) => {
        this.onResize(entries);
      });
      observer.observe(element.nativeElement);
    }
  }

  private onResize(entries: ResizeObserverEntry[]) {
    const borderBoxSize = entries[0].borderBoxSize[0];
    this.sizeChanges.next({
      width: borderBoxSize.blockSize,
      height: borderBoxSize.inlineSize,
    });
  }
}
