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
  tabFocus: number = 0;

  constructor(private jsonService: ReadJsonService) {
    this.setBgImageBody();
  }

  ngOnInit(): void {
    this.getDestinationInfo();

    setTimeout(() => {
      this.setTabListActive(0);
    }, 100);
  }

  setBgImageBody() {
    const bodyClasses = document.body.classList;
    if (bodyClasses.contains('bg-image-home')) {
      bodyClasses.remove('bg-image-home');
    } else if (bodyClasses.contains('bg-image-crew')) {
      bodyClasses.remove('bg-image-crew');
    } else if (bodyClasses.contains('bg-image-tech')) {
      bodyClasses.remove('bg-image-tech');
    }
    bodyClasses.add('bg-image-destination');
  }

  getDestinationInfo() {
    this.jsonService.getDestinations().subscribe((dest) => {
      this.destinations = dest;
      this.currentDestination = this.destinations[0];
    });
  }

  onTabListKeydown(e: any) {
    const tabs: NodeListOf<HTMLElement> = document.querySelectorAll('[role="tab"]');
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
      tabs[this.tabFocus].setAttribute("tabindex", '-1');
    }

    if (e.keyCode === keydownRight) {
      this.tabFocus = this.tabFocus < tabs.length - 1 ? this.tabFocus + 1 : 0;
    }

    if (e.keyCode === keydownLeft) {
      this.tabFocus = this.tabFocus === 0 ? tabs.length - 1 : this.tabFocus - 1;
    }

    tabs[this.tabFocus].setAttribute("tabindex", '0');
    tabs[this.tabFocus].focus();
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
