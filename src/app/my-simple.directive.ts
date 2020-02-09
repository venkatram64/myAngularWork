import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMySimple]'
})
export class MySimpleDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("mouseup") mouseup(){
    this.elementRef.nativeElement.style.fontSize = '2em';
  }

  @HostListener("mousedown") mousedown(){
    this.elementRef.nativeElement.style.fontSize = '1em';
  }

}
