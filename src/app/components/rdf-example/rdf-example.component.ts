import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdf-example',
  templateUrl: './rdf-example.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./rdf-example.component.css']
})
export class RdfExampleComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]], // Only alphabets
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+[0-9]*@[a-zA-Z]+\\.[a-zA-Z]{2,}$') // Email validation
      ]],
      favoriteFramework: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8), // Minimum length
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$') // Password validation
      ]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Value', this.userForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
