import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  imports:[CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() name = 'Unknown Product';
  @Input() price = 0;
  @Input({ transform: trimString }) description = '';
  @Input({ required: true }) stock: number | undefined;
  @Input() discountedPrice = this.price * 0.9;
data:string = "Hello";
}

function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}