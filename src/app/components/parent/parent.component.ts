import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
    parentMessage: string = 'Hello Child! This is a message from your Parent component.';
    childMessage: string | undefined;
  
    receiveMessage(event: string) {
      this.childMessage = event;
    }  
}
