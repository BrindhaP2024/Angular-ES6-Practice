import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style',
  imports: [CommonModule],
  templateUrl: './style.component.html',
  styleUrl: './style.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class StyleComponent {
  inlineStyles = `
  p {
    color: blue;
    font-size: 20px;
  }
`;

}
