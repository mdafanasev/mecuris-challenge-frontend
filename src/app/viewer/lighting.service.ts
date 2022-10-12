import { Injectable } from '@angular/core';
import { AmbientLight, Light, PointLight, Vector3 } from 'three';

const AMBIENT_COLOR = 0xffffff;
const AMBIENT_INTENSITY = 0.5;
const SPOT_COLOR = 0xffffff;
const SPOT_INTENSITY = 0.5;
const SPOT_POSITION: [number, number, number] = [2, 3, 4];
const CENTER = new Vector3(0, 0, 0);

@Injectable()
export class LightingService {
  private readonly ambient = new AmbientLight(AMBIENT_COLOR, AMBIENT_INTENSITY);

  private readonly spot = new PointLight(SPOT_COLOR, SPOT_INTENSITY);

  lights: Light[] = [this.ambient, this.spot];

  constructor() {
    this.init();
  }

  init() {
    this.moveSpot(...SPOT_POSITION);
  }

  moveSpot(x: number, y: number, z: number): void {
    this.spot.position.x = x;
    this.spot.position.y = y;
    this.spot.position.z = z;
    this.spot.lookAt(CENTER);
  }
}
