import { Component } from '@angular/core';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.css']
})
export class DesignSystemComponent {
  constructor() {this.setBgColorBody()}
  setBgColorBody() {
    document.body.style.overflowY = "auto";
  }
}
