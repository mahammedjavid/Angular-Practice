import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {
  constructor(private serv: GlobalService) {

  }
  title = "Header Title"
  ngOnInit() {
    simpleObservable.subscribe((data) => {
      console.log(data)
    })
  }



}
const simpleObservable = new Observable((observer) => {

  // observable execution
  observer.next("first")
  observer.next("second")
  observer.next("third")
  observer.next("fourth")
  observer.complete()
})

// subscribe to the observable
