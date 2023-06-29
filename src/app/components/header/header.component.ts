import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuVisible = false;

  constructor(private router: Router) {}

  onToggleMenu() {
    this.menuVisible = !this.menuVisible;
    const nav = document.getElementById("primary-navigation");
    const btn = document.getElementById("mobile-nav-toggle");
    if (nav && btn && this.menuVisible) {
      btn.classList.remove('bg-burger');
      btn.classList.add('bg-close');
      nav.classList.add('toggle');
    } else if (nav && btn && !this.menuVisible){
      nav.classList.remove('toggle');
      btn.classList.remove('bg-close');
      btn.classList.add('bg-burger');
    }
  }
  
  onHomeClick() {
    this.router.navigate(['/']);
  }

  onDestinationClick() {
    this.router.navigate(['/destination']);
  }

  onCrewClick() {
    this.router.navigate(['/crew']);
  }

  onTechnologyClick() {
    this.router.navigate(['/technology']);
  }
}
