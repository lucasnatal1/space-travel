import { Component, Input } from '@angular/core';

import { Destination } from 'src/app/shared/models/destination.model';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.css'],
})
export class DestinationInfoComponent {
  @Input('destination') destination: Destination | undefined;
}
