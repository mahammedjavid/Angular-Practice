import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';

  // @ViewChild('room', { read: ViewContainerRef }) ref!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const reference = this.ref.createComponent(RoomsComponent)
  // }

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)).subscribe((x) => console.log("Navigation Started")
      )

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe((x) => console.log("Navigation Ended")
      )
  }



}