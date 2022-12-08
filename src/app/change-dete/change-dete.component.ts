import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Observer, share, shareReplay } from 'rxjs';
import { GlobalService } from '../global.service';
import { IUser } from '../type';

@Component({
  selector: 'app-change-dete',
  templateUrl: './change-dete.component.html',
  styleUrls: ['./change-dete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDeteComponent implements OnInit {
  constructor(private todo: GlobalService) {

  }
  hideData = false;
  Counter: number = 0
  Increment() {
    this.Counter++
    console.log(this.Counter)
  }
  data$!: any
  // dataTwo$!: Observable<any>
  ngOnInit(): void {
    this.todo.getTodoData().subscribe((data) => this.data$ = data)
    // this.dataTwo$ = this.data$
  }

  toggle() {
    return this.hideData = !this.hideData
  }

}
