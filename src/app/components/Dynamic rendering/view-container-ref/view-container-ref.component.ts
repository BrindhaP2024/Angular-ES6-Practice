import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  imports: [],
  templateUrl: './view-container-ref.component.html',
  styleUrl: './view-container-ref.component.css'
})
export class ViewContainerRefComponent {
  // @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  // container!: ViewContainerRef;

  // constructor(private resolver: ComponentFactoryResolver) { }

  // ngAfterViewInit() {
  //   const factory = this.resolver.resolveComponentFactory();
  //   this.container.createComponent(factory);
  // }
}
