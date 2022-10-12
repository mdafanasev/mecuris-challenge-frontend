import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Viewer3DObject } from 'src/app/viewer/viewer.model';
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';
import { Entry } from '../entry.model';

@Component({
  selector: 'mc-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryPageComponent {
  entry: Observable<Entry> = this.route.data.pipe(map((data) => data['entry']));

  tempBoxForTest: Viewer3DObject = {
    object: new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({ color: 0x1723ea }),
    ),
  };

  constructor(private readonly route: ActivatedRoute) {}
}
