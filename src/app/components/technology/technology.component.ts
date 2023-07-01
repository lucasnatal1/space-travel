import { Component, OnInit, HostListener } from '@angular/core';

import { Technology } from 'src/app/shared/models/technology.model';
import { ReadJsonService } from 'src/app/shared/services/read-json.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  technology: Technology[] = [];
  currentTech: Technology | undefined;
  tabFocus: number = 0;

  constructor(private jsonService: ReadJsonService) {
    this.setBgImageBody();
  }

  ngOnInit(): void {
    this.getTechnology();
    this.getScreenSize(null);
    setTimeout(() => {
      this.setTabListActive(0);
    }, 100);
  }

  getTechnology() {
    this.jsonService.getTechnology().subscribe((data) => {
      this.technology = data;
      this.currentTech = this.technology[0];
      console.log(this.technology);
    });
  }

  setBgImageBody() {
    const bodyClasses = document.body.classList;
    if (bodyClasses.contains('bg-image-home')) {
      bodyClasses.remove('bg-image-home');
    } else if (bodyClasses.contains('bg-image-destination')) {
      bodyClasses.remove('bg-image-destination');
    } else if (bodyClasses.contains('bg-image-crew')) {
      bodyClasses.remove('bg-image-crew');
    }
    bodyClasses.add('bg-image-tech');
  }

  onNumberListKeydown(e: any) {
    const tabs: NodeListOf<HTMLElement> =
      document.querySelectorAll('[role="tab"]');
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
      tabs[this.tabFocus].setAttribute('tabindex', '-1');
    }

    if (e.keyCode === keydownRight) {
      this.tabFocus = this.tabFocus < tabs.length - 1 ? this.tabFocus + 1 : 0;
    }

    if (e.keyCode === keydownLeft) {
      this.tabFocus = this.tabFocus === 0 ? tabs.length - 1 : this.tabFocus - 1;
    }

    tabs[this.tabFocus].setAttribute('tabindex', '0');
    tabs[this.tabFocus].focus();
  }

  onTechClick(id: number) {
    this.currentTech = this.technology[id];
    this.setTabListActive(id);
  }

  setTabListActive(id: number) {
    const numberList = document.getElementById('number-list');
    if (numberList) {
      for (let i = 0; i < numberList.children.length; i++) {
        if (i === id) {
          numberList.children[i].classList.add('active');
        } else {
          numberList.children[i].classList.remove('active');
        }
      }
    }
  }

  portraitSize: boolean = false;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event: any) {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 720) {
      this.portraitSize = true;
    } else {
      this.portraitSize = false;
    }
  }
}
