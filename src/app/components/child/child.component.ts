import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageEvent.emit('Hello Parent! This is a message from your Child component.');
  }
}

