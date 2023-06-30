import { Component, OnInit } from '@angular/core';

import { Crew } from 'src/app/shared/models/crew.model';
import { ReadJsonService } from 'src/app/shared/services/read-json.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  crew: Crew[] = [];
  currentCrewMember: Crew | undefined;
  tabFocus: number = 0;

  constructor(private jsonService: ReadJsonService) {
    this.setBgColorBody();
  }

  ngOnInit(): void {
    this.getCrew();

    setTimeout(() => {
      this.setTabListActive(0);
    }, 100);
  }

  getCrew() {
    this.jsonService.getCrew().subscribe((data) => {
      this.crew = data;
      this.currentCrewMember = this.crew[0];
    });
  }

  setBgColorBody() {
    const bodyClasses = document.body.classList;
    if (bodyClasses.contains('bg-image-home')) {
      bodyClasses.remove('bg-image-home');
    } else if (bodyClasses.contains('bg-image-destination')) {
      bodyClasses.remove('bg-image-destination');
    }
    bodyClasses.add('bg-image-crew');
  }

  onDotListKeydown(e: any) {
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

  onCrewMemberClick(id: number) {
    this.currentCrewMember = this.crew[id];
    this.setTabListActive(id);
  }

  setTabListActive(id: number) {
    const dotList = document.getElementById('dot-list');
    if (dotList) {
      for (let i = 0; i < dotList.children.length; i++) {
        if (i === id) {
          dotList.children[i].classList.add('active');
        } else {
          dotList.children[i].classList.remove('active');
        }
      }
    }
  }
}
