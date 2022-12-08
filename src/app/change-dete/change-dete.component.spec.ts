import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDeteComponent } from './change-dete.component';

describe('ChangeDeteComponent', () => {
  let component: ChangeDeteComponent;
  let fixture: ComponentFixture<ChangeDeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDeteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
