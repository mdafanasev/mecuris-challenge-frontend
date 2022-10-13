import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CustomizationService } from '../customization.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'mc-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CustomizationService],
})
export class EntryPageComponent {
  entry: Observable<Entry> = this.route.data.pipe(map((data) => data['entry']));

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  redirectToCatalog(): void {
    this.router.navigateByUrl('');
  }
}
