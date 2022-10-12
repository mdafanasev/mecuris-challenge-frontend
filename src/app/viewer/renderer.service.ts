import { ElementRef, Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WebGLRenderer, WebGLRendererParameters } from 'three';
import { CameraService } from './camera.service';
import { ResizerService } from './resizer.service';
import { SceneService } from './scene.service';
import { Size } from './viewer.model';

const RENDERER_OPTIONS: WebGLRendererParameters = {
  antialias: true,
  alpha: true,
};

@Injectable()
export class RendererService {
  private readonly renderer = new WebGLRenderer(RENDERER_OPTIONS);

  private destroy = new Subject<void>();

  constructor(
    private readonly element: ElementRef<Element>,
    private readonly resizer: ResizerService,
    private readonly scene: SceneService,
    private readonly camera: CameraService,
  ) {
    this.init();
  }

  init(): void {
    this.appendCanvas();
    this.startRenderLoop();
    this.resizer.size
      .pipe(takeUntil(this.destroy))
      .subscribe((size) => this.setRendererSize(size));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  private startRenderLoop(): void {
    const render = () => {
      this.tick();
      requestAnimationFrame(render);
    };
    render();
  }

  private tick(): void {
    const scene = this.scene.scene;
    const camera = this.camera.camera;
    this.renderer.render(scene, camera);
  }

  private appendCanvas(): void {
    if (this.element.nativeElement) {
      this.element.nativeElement.appendChild(this.renderer.domElement);
    }
  }

  private setRendererSize(size: Size): void {
    this.renderer.setSize(size.width, size.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }
}
