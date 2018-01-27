import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    console.log(el);
    renderer.setStyle(el.nativeElement, 'background',
      'yellow');
    renderer.setStyle(el.nativeElement, 'color',
      'red');

  }

}
