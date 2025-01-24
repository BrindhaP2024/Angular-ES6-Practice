import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported

@Component({
  selector: 'app-tdf-example',
  imports: [CommonModule, FormsModule], // Include FormsModule in imports
  templateUrl: './tdf-example.component.html',
  styleUrls: ['./tdf-example.component.css'] // Corrected from styleUrl to styleUrls
})
export class TdfExampleComponent {
  name = ''; // Removed const
  email = ''; // Removed const
  favoriteFramework = ''; // Removed const

  showFramework(form: any) {
    if (form.valid) {
      alert(`Name: ${form.value.name}\nEmail: ${form.value.email}\nFavorite Framework: ${form.value.favoriteFramework}`);
    }
  }
}
