import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
})
export class CapitalizeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keyup') onKeyUp() {
    if (this.el.nativeElement.value) {
      const arr: string[] = this.el.nativeElement.value.split('');
      arr[0] = arr[0].toUpperCase();
      this.el.nativeElement.value = arr.join('');
    }
  }
}
