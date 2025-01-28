import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicRenderingComponent } from '../../dynamic-rendering/dynamic-rendering.component';

@Component({
  selector: 'app-view-container-ref',
  imports: [],
  templateUrl: './view-container-ref.component.html',
  styleUrl: './view-container-ref.component.css'
})
export class ViewContainerRefComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(DynamicRenderingComponent);
    this.container.createComponent(factory);
  }
}
