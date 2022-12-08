import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  constructor(private change: ChangeDetectorRef) {
    // this.change.detach()
    // console.log('ChildComponent');
  }
  excuting() {
    // this.change.detectChanges()
    console.log('ChildComponent')
    return 'childComponent'
  }
  @Input() toChild: any;
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }


}
