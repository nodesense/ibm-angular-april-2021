import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { HostTemplateDirective } from 'src/app/directives/host-template.directive';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // creatign componentn using typescript, dynamically

  aboutLikes = 345;

  @ViewChild(HostTemplateDirective, {static: true})
  hostDirective : HostTemplateDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    let factory = this.componentFactoryResolver.resolveComponentFactory(GridComponent);

    let viewContainerRef = this.hostDirective.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(factory);
  }

}
