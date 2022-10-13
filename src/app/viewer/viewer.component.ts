import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CameraService } from './camera.service';
import { LightingService } from './lighting.service';
import { RendererService } from './renderer.service';
import { ResizerService } from './resizer.service';
import { SceneService } from './scene.service';
import { Customization, Viewer3DObject } from './viewer.model';

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
export class ViewerComponent implements OnChanges {
  @Input() object: Viewer3DObject | null = null;

  @Input() customizations: Customization[] = [];

  private model: Object3D | null = null;

  constructor(
    private readonly renderer: RendererService,
    private readonly scene: SceneService,
  ) {
    this.scene.init();
    this.renderer.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['object']) {
      const current = changes['object'].currentValue.objectUrl;
      const prev = changes['object'].previousValue?.objectUrl;
      if (current !== prev) {
        this.loadObject();
      }
    }
    if (changes['customizations']) {
      this.applyCustomizations();
    }
  }

  private loadObject(): void {
    if (!this.object) return;

    const loader = new GLTFLoader();
    loader.load(this.object.objectUrl, (gltf) => {
      this.model = gltf.scene;
      this.showModel();
    });
  }

  private showModel(): void {
    if (this.model) {
      this.scene.setObject(this.model);
      this.applyCustomizations();
    }
  }

  private applyCustomizations(): void {
    for (let customization of this.customizations) {
      this.applyCustomization(customization);
    }
  }

  private applyCustomization(customization: Customization): void {
    const target = this.model?.children.find(
      (child) => child.name === customization.target,
    );
    if (target && customization.type === 'color') {
      this.applyColor(target as Mesh, customization);
    }
    if (target && customization.type === 'visible') {
      this.applyVisibility(target as Mesh, customization);
    }
  }

  private applyColor(target: Mesh, customization: Customization): void {
    const newMaterial = new MeshStandardMaterial({
      color: customization.value,
    });
    target.material = newMaterial;
  }

  private applyVisibility(target: Mesh, customization: Customization): void {
    if (customization.value === 'false') {
      target.visible = false;
    } else {
      target.visible = true;
    }
  }
}
