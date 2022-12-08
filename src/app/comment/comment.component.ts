import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { GlobalService } from '../global.service';
import { PriceComponent } from '../price/price.component';
import { IComment } from '../type';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  constructor(private s: ActivatedRoute, private glob: GlobalService) {
    console.log('inside comment component')
  }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  data = this.s.data.pipe(
    pluck('comments')
  )



}


