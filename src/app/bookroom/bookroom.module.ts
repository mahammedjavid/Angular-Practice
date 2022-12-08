import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookroomRoutingModule } from './bookroom-routing.module';
import { BookroomComponent } from './bookroom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    BookroomComponent
  ],
  imports: [
    CommonModule,
    BookroomRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule

  ],
  exports: [BookroomComponent]
})
export class BookroomModule { }
