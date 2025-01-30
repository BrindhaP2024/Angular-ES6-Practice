import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css'
})
export class SignalExampleComponent {

  count = signal(0);

  increment(): void {
    this.count.set(this.count() + 1);
  }
}



