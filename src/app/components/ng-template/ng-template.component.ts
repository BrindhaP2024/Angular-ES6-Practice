import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>This is a normal element</p>

    <!-- Template Fragment -->
    <ng-template #myFragment>
      <p>This is a template fragment</p>
    </ng-template>

    <!-- Conditional Rendering using *ngIf, *ngIf else -->
    <div *ngIf="a > b; else elseBlock1">
      <p>{{ a }} is greater than {{ b }}</p>
    </div>
    <ng-template #elseBlock1>
      <p>{{ a }} is less than or equal to {{ b }}</p>
    </ng-template>

    <!-- Using ng-template with *ngFor -->
    <h2>Items List</h2>
    <ng-container *ngFor="let item of items; let isLast = last">
      <div>{{ item.name }}</div>
      <ng-template [ngIf]="isLast">
        <p>This is the last item.</p>
      </ng-template>
    </ng-container>

    <!-- Using ng-template with ngSwitch -->
    <h2>Select a Template</h2>
    <div class="button-group">
      <button class="btn btn-primary" (click)="selectTemplate('template1')">Template 1</button>
      <button class="btn btn-primary" (click)="selectTemplate('template2')">Template 2</button>
    </div>

    <div [ngSwitch]="selectedTemplate">
      <ng-template ngSwitchCase="template1">
        <p>This is content for Template 1.</p>
      </ng-template>
      <ng-template ngSwitchCase="template2">
        <p>This is content for Template 2.</p>
      </ng-template>
      <ng-template ngSwitchDefault>
        <p>Select a template to display its content.</p>
      </ng-template>
    </div>

    <!-- Dynamic Template Rendering -->
    <ng-container *ngTemplateOutlet="selectedTemplate === 'template1' ? template1 : template2"></ng-container>

    <ng-template #template1>
      <div class="bg-primary p-3 text-white text-center">Dynamically Loaded Template 1</div>
    </ng-template>

    <ng-template #template2>
      <div class="bg-success p-3 text-white text-center">Dynamically Loaded Template 2</div>
    </ng-template>

    <!-- Pass parameters to template -->
    <ng-template #paramTemplate let-name="name">
      <p>Hello, {{name}}!</p>
    </ng-template>
    <ng-container *ngTemplateOutlet="paramTemplate; context: {name: 'Angular'}"></ng-container>

    <!-- Render template fragment dynamically -->
    <ng-container *ngTemplateOutlet="myFragment"></ng-container>
  `,
    styleUrls: ['./ng-template.component.css']

})
export class NgTemplateComponent {
  a: number = 5;
  b: number = 3;
  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  selectedTemplate: string = 'template1';

  @ViewChild('myFragment', { static: true }) myFragment: TemplateRef<unknown> | undefined;

  constructor(private viewContainerRef: ViewContainerRef) {}

  selectTemplate(template: string): void {
    this.selectedTemplate = template;
  }

  insertTemplate(): void {
    if (this.myFragment) {
      this.viewContainerRef.createEmbeddedView(this.myFragment);
    }
  }
}
