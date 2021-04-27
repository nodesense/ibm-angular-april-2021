import { Directive, OnInit, Input, HostListener, 
         ElementRef, Renderer2 } from '@angular/core';
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

  // now the property name is appHighlight, not color
  @Input("appHighlight")
  color: string = 'lightgreen'

  // hostElement is the actual dom wrapper that host directive
  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) {
    console.log("Highlight directive created")
  }

  ngOnInit() {
    console.log('highlight directive oninit', this.color)
    console.log("host tag ", this.hostElement.nativeElement.tagName)
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    console.log("mouse enter")
    this.renderer.setStyle(this.hostElement.nativeElement,
                           "background",
                           this.color);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    console.log("mouse leave")
    this.renderer.removeStyle(this.hostElement.nativeElement,
      "background");
  }

}
