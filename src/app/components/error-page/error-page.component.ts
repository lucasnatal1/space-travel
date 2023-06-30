import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent {
  stars = [...Array(80).keys()];

  onMouseMove(e: any) {
    const planet = document.getElementById('planet');

    let domainX = [0, document.body.clientWidth],
        domainY = [0, document.body.clientHeight],
        range = [-10, 10];

    let translate = {
      x:
        range[0] +
        ((e.clientX - domainX[0]) * (range[1] - range[0])) /
          (domainX[1] - domainX[0]),
      y:
        range[0] +
        ((e.clientY - domainY[0]) * (range[1] - range[0])) /
          (domainY[1] - domainY[0]),
    };

    if(planet) {
      planet.style.animation = 'none';
      planet.style.transform = `translate(${translate.x}px, ${translate.y}px)`;
    }
    
  }

  onMouseLeave() {
    console.log("MOUSELEAVE");
    const planet = document.getElementById('planet');
    if(planet) {
      planet.style.animation = '';
    }
  }
}
