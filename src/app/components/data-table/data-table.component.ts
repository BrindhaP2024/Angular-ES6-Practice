import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-data-table',
  imports:[ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data: any[] = [];
  userForm: FormGroup;
  editMode: boolean = false;
  editIndex: number | null = null;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]], // Only alphabets
      email: ['', [Validators.required, Validators.email]], // Email validation
      favoriteFramework: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8), // Minimum length
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$') // Password validation
      ]]
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  // GET request
  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.data = response;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // POST request
  postData(): void {
    this.http.post('https://jsonplaceholder.typicode.com/users', this.userForm.value).subscribe(
      (response: any) => {
        this.data.push(response);
        this.userForm.reset();
      },
      error => {
        console.error('Error posting data:', error);
      }
    );
  }

  // PUT request
  putData(index: number): void {
    const user = this.data[index];
    this.http.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, this.userForm.value).subscribe(
      (response: any) => {
        this.data[index] = response;
        this.editMode = false;
        this.userForm.reset();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  // PATCH request
  patchData(index: number): void {
    const user = this.data[index];
    const partialUpdate = { name: 'Partially Updated Name' };
    this.http.patch(`https://jsonplaceholder.typicode.com/users/${user.id}`, partialUpdate).subscribe(
      (response: any) => {
        this.data[index] = { ...user, ...response };
      },
      error => {
        console.error('Error patching data:', error);
      }
    );
  }

  // DELETE request
  deleteData(index: number): void {
    const user = this.data[index];
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`).subscribe(
      response => {
        this.data.splice(index, 1);
      },
      error => {
        console.error('Error deleting data:', error);
      }
    );
  }

  // Enable edit mode
  enableEdit(index: number): void {
    this.editMode = true;
    this.editIndex = index;
    this.userForm.patchValue(this.data[index]);
  }

  // Cancel edit
  cancelEdit(): void {
    this.editMode = false;
    this.userForm.reset();
    this.editIndex = null;
  }

  // Submit the form
  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.editMode) {
        this.putData(this.editIndex!);
      } else {
        this.postData();
      }
    } else {
      console.log('Form is not valid');
    }
  }
}
