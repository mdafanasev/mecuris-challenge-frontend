import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Entry } from '../entry.model';

@Component({
  selector: 'mc-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryPageComponent {
  entry: Observable<Entry> = this.route.data.pipe(map((data) => data['entry']));

  constructor(private readonly route: ActivatedRoute) {}
}
