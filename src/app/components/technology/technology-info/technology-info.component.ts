import { Component, Input } from '@angular/core';

import { Technology } from 'src/app/shared/models/technology.model';

@Component({
  selector: 'app-technology-info',
  templateUrl: './technology-info.component.html',
  styleUrls: ['./technology-info.component.css']
})
export class TechnologyInfoComponent {
  @Input('technology') tech: Technology | undefined;
}
