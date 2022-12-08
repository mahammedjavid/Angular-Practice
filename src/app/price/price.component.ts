import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { __read } from 'tslib';
import { RoomsComponent } from '../rooms/rooms.component';
import { SingleroomComponent } from '../singleroom/singleroom.component';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements AfterViewInit {
  title: string = 'Price'

  image: any = 'https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?pid=ImgDet&rs=1'

  data() {
    console.log('data')
    return 'childComponent'
  }

  // @ViewChild('roomList', { read: ViewContainerRef }) vcr!: ViewContainerRef
  // @ViewChild(SingleroomComponent) single !: SingleroomComponent

  ngAfterViewInit(): void {
    // this.vcr.createComponent(SingleroomComponent)
  }




}
