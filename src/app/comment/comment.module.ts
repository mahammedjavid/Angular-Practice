import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { HttpClientModule } from '@angular/common/http';
import { injectionToken } from '../config.service';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: injectionToken,
      useValue: {
        title: 'InjectionToken Value in Comment Module'
      }
    }
  ]
})
export class CommentModule { }
