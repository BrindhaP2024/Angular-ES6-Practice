import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  onHover(event: MouseEvent): void {
    console.log('Mouse entered button!', event);
    alert("Mouse event is working here!!");
  }

  doubleClick(): void {
    alert('Double clicked!!');
  }

  updateField(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input value is:', inputElement.value);
  }

  updateKey(event: KeyboardEvent): void {
    console.log('User clicked on the field', event);
    alert('Key event is done');
  }

  updateKey1(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      console.log('User clicked on the field', event);
      alert('Key event enter is done');
    }
  }
}
