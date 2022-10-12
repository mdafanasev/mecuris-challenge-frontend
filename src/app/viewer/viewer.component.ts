import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
      this.scene.setObject(object);
    }
  }

  constructor(
    private readonly renderer: RendererService,
    private readonly scene: SceneService,
  ) {
    this.scene.init();
    this.renderer.init();
  }
}
