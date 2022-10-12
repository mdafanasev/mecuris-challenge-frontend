import { Injectable } from '@angular/core';
import { Object3D, Scene } from 'three';
import { CameraService } from './camera.service';
import { LightingService } from './lighting.service';

@Injectable()
export class SceneService {
  public readonly scene = new Scene();

  private object: Object3D | null = null;

  constructor(
    private readonly lighting: LightingService,
    private readonly camera: CameraService,
  ) {}

  init(): void {
    this.scene.add(...this.lighting.lights);
    this.scene.add(this.camera.camera);
  }

  setObject(newObject: Object3D): void {
    if (this.object) {
      this.scene.remove(this.object);
    }
    this.scene.add(newObject);
    this.object = newObject;
  }
}
