import { Component, Input } from '@angular/core';

import { Crew } from 'src/app/shared/models/crew.model';

@Component({
  selector: 'app-crew-info',
  templateUrl: './crew-info.component.html',
  styleUrls: ['./crew-info.component.css']
})
export class CrewInfoComponent {
  @Input('crewMember') crewMember: Crew | undefined;
}
