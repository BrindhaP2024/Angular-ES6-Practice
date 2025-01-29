import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CombinedExampleComponent } from "../controlflow-example/controlflow-example.component";

@Component({
  selector: 'app-controlflow',
  imports: [CommonModule, CombinedExampleComponent],
  templateUrl: './controlflow.component.html',
  styleUrls: ['./controlflow.component.css']
})
export class ControlflowComponent {
  a: number = 5;
  b: number = 3;
  showDiv3: boolean = false;
  showDiv1: boolean = true;

  showCircle: boolean = false;
  showSquare: boolean = false;
  showTriangle: boolean = false;
  showRectangle: boolean = false;

  toggleDiv3(): void {
    this.showDiv3 = !this.showDiv3;
  }

  toggleDiv1(): void {
    this.showDiv1 = !this.showDiv1;
  }

  toggleShape(shape: string): void {
    this.showCircle = false;
    this.showSquare = false;
    this.showTriangle = false;
    this.showRectangle = false;

    switch (shape) {
      case 'circle':
        this.showCircle = true;
        break;
      case 'square':
        this.showSquare = true;
        break;
      case 'triangle':
        this.showTriangle = true;
        break;
      case 'rectangle':
        this.showRectangle = true;
        break;
    }
  }
}
