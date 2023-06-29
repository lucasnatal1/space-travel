import { Component, OnInit } from '@angular/core';

import { ReadJsonService } from 'src/app/shared/services/read-json.service';
import { Destination } from 'src/app/shared/models/destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  currentDestination: Destination | undefined;

  constructor(private jsonService: ReadJsonService) {
    this.setBgColorBody();
  }

  ngOnInit(): void {
    this.getDestinationInfo();

    setTimeout(() => {
      this.setTabListActive(0);
    }, 100);
  }

  getDestinationInfo() {
    this.jsonService.getDestinations().subscribe((dest) => {
      this.destinations = dest;
      this.currentDestination = this.destinations[0];
    });
  }

  setBgColorBody() {
    const bodyClasses = document.body.classList;
    if (bodyClasses.contains('bg-image-home')) {
      bodyClasses.remove('bg-image-home');
    }
    bodyClasses.add('bg-image-destination');
  }

  onDestinationClick(id: number) {
    this.currentDestination = this.destinations[id];
    this.setTabListActive(id);
  }

  setTabListActive(id: number) {
    const tabList = document.getElementById('tab-list');
    if (tabList) {
      for (let i = 0; i < tabList.children.length; i++) {
        if (i === id) {
          tabList.children[i].classList.add('active');
        } else {
          tabList.children[i].classList.remove('active');
        }
      }
    }
  }
}
