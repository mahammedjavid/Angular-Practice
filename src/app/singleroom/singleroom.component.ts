import { ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, Output, OnChanges, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { GlobalService } from '../global.service';
import { PriceComponent } from '../price/price.component';
import { ROOM } from '../type';

@Component({
  selector: 'app-singleroom',
  templateUrl: './singleroom.component.html',
  styleUrls: ['./singleroom.component.scss'],
})
export class SingleroomComponent implements OnChanges, AfterViewInit, AfterViewChecked {

  constructor(private ser: GlobalService) {
    this.ser
  }


  @Input() room: ROOM[] = []
  @Input() title !: string;
  @Input() rent: any
  @Output() selectedRoom = new EventEmitter<ROOM>()

  shareToParent(data: ROOM) {
    this.selectedRoom.emit(data)
  }
  titlee: string = ""

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes) //room at @Input()
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  @ViewChild(PriceComponent) price!: PriceComponent

  ngAfterViewInit() {
    // console.log(this.price);

  }
  ngAfterViewChecked() {
    // console.log(this.price);
  }

}
