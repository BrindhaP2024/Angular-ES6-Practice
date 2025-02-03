import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
form: FormGroup;

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    skills: this.fb.array([
      this.fb.control('')
    ])
  });
}

get skills(): FormArray {
  return this.form.get('skills') as FormArray;
}

addSkill() {
  this.skills.push(this.fb.control(''));
}

removeSkill(index: number) {
  this.skills.removeAt(index);
}

onSubmit() {
  console.log(this.form.value);
}
}
