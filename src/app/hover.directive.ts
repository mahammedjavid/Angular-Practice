import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.addEventListener('click', () => {
      console.log('Clicked')
    })

  }
}
