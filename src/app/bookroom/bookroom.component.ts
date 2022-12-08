import { Component, DoCheck, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.scss']
})
export class BookroomComponent {

  constructor(private fb: FormBuilder) { }

  bookRoomForm = this.fb.group({
    name: [''],
    age: [''],
    place: [''],
  })
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  formSubmit() {
    console.log(this.bookRoomForm.value);
  }


}
