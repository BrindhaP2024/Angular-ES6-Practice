import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-controlflow-example',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './controlflow-example.component.html',
  styleUrls: ['./controlflow-example.component.css']
})
export class CombinedExampleComponent {
  a: number = 5;
  b: number = 3;
  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  userPermissions: string = 'viewer';
  selectedShape: string = '';

  trackById(index: number, item: Item): number {
    return item.id;
  }

  selectShape(shape: string): void {
    this.selectedShape = shape;
  }
}
