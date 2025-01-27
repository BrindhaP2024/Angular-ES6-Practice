// customelements.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customelements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customelements.component.html',
  styleUrls: ['./customelements.component.css']
})
export class CustomelementsComponent {
  @Input() widgetInput = 'Angular Calculator Component';
  @Output() widgetOutput = new EventEmitter<number>();

  number1 = 0;
  number2 = 0;
  result = 0;

  add(): void {
    this.result = this.number1 + this.number2;
    this.widgetOutput.emit(this.result);
  }

  subtract(): void {
    this.result = this.number1 - this.number2;
    this.widgetOutput.emit(this.result);
  }

  multiply(): void {
    this.result = this.number1 * this.number2;
    this.widgetOutput.emit(this.result);
  }

  divide(): void {
    this.result = this.number1 / this.number2;
    this.widgetOutput.emit(this.result);
  }
}
