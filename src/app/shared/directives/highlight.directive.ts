import { Directive, OnInit, Input, HostListener } from '@angular/core';
// Attribute directive
// highlight the dom element when mouse enter 
// directives doesn't have view/html
// directive is hosted on top a component or a tag <div appHighlight/>
//  <p appHighlight
// HostListener to subscribe event happens on host tag
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input()
  color: string = 'lightgreen'

  constructor() {
    console.log("Highlight directive created")
  }

  ngOnInit() {
    console.log('highlight directive oninit', this.color)
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    console.log("mouse enter")
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    console.log("mouse leave")
  }

}
