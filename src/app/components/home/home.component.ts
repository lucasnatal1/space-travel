import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor() {
    this.setBgImageBody();
  }

  setBgImageBody() {
    const bodyClasses = document.body.classList;
    if (bodyClasses.contains('bg-image-tech')) {
      bodyClasses.remove('bg-image-tech');
    } else if (bodyClasses.contains('bg-image-destination')) {
      bodyClasses.remove('bg-image-destination');
    } else if (bodyClasses.contains('bg-image-crew')) {
      bodyClasses.remove('bg-image-crew');
    }
    bodyClasses.add('bg-image-home');
  }
}
