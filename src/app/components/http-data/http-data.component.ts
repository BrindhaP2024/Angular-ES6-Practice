import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-data',
  standalone: true,
  imports: [NgIf, JsonPipe, CommonModule],
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})
export class HttpDataComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  // GET request
  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.data = response;
    });
  }

  // POST request
  postData(): void {
    const newPost = { title: 'New Post', content: 'This is the content of the new post' };
    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost).subscribe(response => {
      this.data = response;
    });
  }

  // PUT request
  putData(postId: number): void {
    const updatedPost = { title: 'Updated Post', content: 'This is the updated content of the post' };
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost).subscribe(response => {
      this.data = response;
    });
  }

  // PATCH request
  patchData(postId: number): void {
    const partialUpdate = { title: 'Partially Updated Title' };
    this.http.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, partialUpdate).subscribe(response => {
      this.data = response;
    });
  }

  // DELETE request
  deleteData(postId: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).subscribe(response => {
      this.data = response;
    });
  }
}
