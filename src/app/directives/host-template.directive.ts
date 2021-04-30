import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHostTemplate]'
})
export class HostTemplateDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
