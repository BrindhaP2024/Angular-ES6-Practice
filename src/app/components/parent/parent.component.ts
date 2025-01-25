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
    commonData: string;
  
    receiveMessage(event: string) {
      this.childMessage = event;
    }  


  constructor() {
    this.commonData = 'This is shared data';
  }

  ngOnInit(): void {
    console.log('Base component initialized');
  }

  sharedMethod() {
    console.log('This method is shared among all components that inherit from BaseComponent');
  }
}
