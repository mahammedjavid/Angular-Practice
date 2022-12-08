import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { roomList } from 'src/data';
import { ROOM } from '../type';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  allData!: ROOM | undefined
  id: any
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((y) => {
      let data = roomList.find((x: any) => y.get('id') == x.roomNumber)
      this.allData = data
      // console.log(y.get('id'))
    })
    console.log(this.route)
  }


}
