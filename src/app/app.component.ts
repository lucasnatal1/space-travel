import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'space-travel-angular';
  currentUrl: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof(NavigationEnd)) {
        this.currentUrl = event.url;
        console.log(this.currentUrl);
      }
    })
    this.route.fragment.subscribe(value => {
      if (value) {
        document.getElementById(value)?.scrollIntoView({behavior: 'smooth'});
      }
    })
  }
}
