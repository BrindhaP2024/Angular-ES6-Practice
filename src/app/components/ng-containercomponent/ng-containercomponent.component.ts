import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ControlflowComponent } from '../controlflow/controlflow.component';
import { HostnameExampleComponent } from '../hostname-example/hostname-example.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-containercomponent',
  imports: [CommonModule],
  templateUrl: './ng-containercomponent.component.html',
  styleUrl: './ng-containercomponent.component.css'
})
export class NgContainercomponentComponent {
  isAdmin = false;
showContent: any;

  get profileComponent() {
    return this.isAdmin ? ControlflowComponent : HostnameExampleComponent;
  }
  @ViewChild('adminTemplate', { static: true }) adminTemplate!: TemplateRef<unknown>;
  @ViewChild('basicTemplate', { static: true }) basicTemplate!: TemplateRef<unknown>;

}
