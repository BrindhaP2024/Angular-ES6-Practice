import { Component } from '@angular/core';
import { SampleSelectorComponent } from "../sample-selector/sample-selector.component";
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-selectors',
  template: `
    <div class="container">
      <!-- Type selector example -->
      <app-sample-selector></app-sample-selector>
      
      <!-- Attribute selector example -->
      <div dropzone>
        <p>Attribute selector content</p>
      </div>
      
      <!-- Class selector example -->
      <div class="menu-item">
        <p>Class selector content</p>
      </div>
      
      <!-- Combining selectors example with :not pseudo-class -->
      <button dropzone type="reset">Reset Button</button>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
        border: 1px solid #ccc;
      }
      profile-photo p {
        color: red;
      }
      [dropzone] {
        border: 2px dashed #999;
        padding: 10px;
      }
      [dropzone] p {
        color: green;
      }
      .menu-item {
        margin: 10px 0;
      }
      .menu-item p {
        color: blue;
      }
      button[dropzone]:not(textarea) {
        background-color: purple;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
      }
    `
  ],
  imports: [SampleSelectorComponent]
})
export class SelectorsComponent {}
