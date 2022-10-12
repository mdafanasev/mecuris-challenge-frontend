import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PerspectiveCamera, Vector3 } from 'three';
import { ResizerService } from './resizer.service';
import { Size } from './viewer.model';

const FOV = 50;
const ASPECT = 1;
const NEAR = 1;
const FAR = 1000;
const INITIAL_POSITION: [number, number, number] = [5, 5, 12];
const CENTER = new Vector3(0, 0, 0);

@Injectable()
export class CameraService {
  public readonly camera = new PerspectiveCamera(FOV, ASPECT, NEAR, FAR);

  private destroy = new Subject<void>();

  constructor(private readonly resizer: ResizerService) {
    this.init();
  }

  init() {
    this.resizer.size
      .pipe(takeUntil(this.destroy))
      .subscribe((size) => this.updateAspectRatio(size));
    this.move(...INITIAL_POSITION);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  updateAspectRatio(size: Size): void {
    const aspectRatio = size.width / size.height;
    this.camera.aspect = aspectRatio;
  }

  move(x: number, y: number, z: number): void {
    this.camera.position.x = x;
    this.camera.position.y = y;
    this.camera.position.z = z;
    this.camera.lookAt(CENTER);
  }
}
