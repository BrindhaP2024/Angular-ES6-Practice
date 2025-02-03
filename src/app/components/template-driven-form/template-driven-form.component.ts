import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
    user = {
      name: '',
      email: ''
    };

    onSubmit() {
      console.log(this.user);
    }
}
