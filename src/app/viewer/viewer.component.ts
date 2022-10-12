import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CameraService } from './camera.service';
import { LightingService } from './lighting.service';
import { RendererService } from './renderer.service';
import { ResizerService } from './resizer.service';
import { SceneService } from './scene.service';
import { Viewer3DObject } from './viewer.model';

@Component({
  selector: 'mc-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    RendererService,
    SceneService,
    CameraService,
    LightingService,
    ResizerService,
  ],
})
export class ViewerComponent {
  @Input() set object(object: Viewer3DObject | null) {
    if (object) {
      this.loadObject(object.objectUrl);
    }
  }

  constructor(
    private readonly renderer: RendererService,
    private readonly scene: SceneService,
  ) {
    this.scene.init();
    this.renderer.init();
  }

  private loadObject(objectUrl: string): void {
    const loader = new GLTFLoader();
    loader.load(objectUrl, (gltf) => {
      this.showObject(gltf.scene);
    });
  }

  private showObject(object: Object3D) {
    this.scene.setObject(object);
  }
}
