import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @Input() defaultColor:string = 'brown';
  @Input() hoverColor:string = 'pink';

  constructor(private el:ElementRef) {
     this.setColor(this.defaultColor);
   }

  @HostListener('mouseenter') onMouseEnter(){
    this.setColor(this.hoverColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setColor(this.defaultColor);
  }
  private setColor(color:string){
     this.el.nativeElement.style.color = color;
  }

}
