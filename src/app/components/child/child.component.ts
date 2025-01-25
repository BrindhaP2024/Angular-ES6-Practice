import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends ParentComponent implements OnInit {
  @Input() messageFromParent: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();

  override ngOnInit(): void {
    super.ngOnInit(); // Calls the ngOnInit from ParentComponent
    console.log('Child component initialized');
  }

  sendMessageToParent(): void {
    this.messageEvent.emit('Hello Parent! This is a message from your Child component.');
  }
}
