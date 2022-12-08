import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ROOM } from '../type';
import { roomList } from 'src/data';
import { FormControl, FormGroup } from '@angular/forms';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {


  @ViewChild(HeaderComponent) header!: HeaderComponent

  @ViewChildren(HeaderComponent) head!: QueryList<HeaderComponent>
  ngOnInit(): void {
    // console.log(this.header)
  }
  // ngAfterViewInit(): void {
  //   // console.log(this.header)
  //   // this.header.title = "After View Init"
  //   // this.head.last.title = "View Children Second Component"  //if i want to acces second header component that is used in room component we use Viewchilder
  // }
  ngAfterViewChecked(): void {
    // this.header.title = "After View Init"

  }

  title = 'NewString From Parent'

  roomList = roomList

  form = new FormGroup({
    price: new FormControl('')
  })



  constructor() {
  }


  getData(data: ROOM) {
    console.log(data)
  }

  addRoom() {
    let newRoom: ROOM = {
      roomNumber: 7,
      type: 'Double',
      bhk: 5,
      food: 'No',
      rent: 8000,
      rating: 4.5

    }
    this.roomList.push(newRoom)
  }


  @ViewChild(PriceComponent) pricee!: PriceComponent

  ngAfterViewInit() {
    // console.log(this.pricee.title = "room")
  }

}
