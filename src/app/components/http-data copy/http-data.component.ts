import { appConfig } from './../app.config';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-http-data',
  standalone: true,
  imports: [NgIf, JsonPipe,CommonModule],
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})
export class HttpDataComponent implements OnInit {
  // private configService = inject(this.configService)
  data: any;
  data1: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.data = response;
    });
  }

//   postData(): void {
//     const newPost = { title: 'New Post', content: 'This is the content of the new post' };
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     this.http.post('https://jsonplaceholder.typicode.com/posts', newPost,{ headers }).subscribe(response => {
//     this.data = response;
//     });
//   }


 postData(): void {
  const newPost = { title: 'New Post', content: 'This is the content of the new post' };
  // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  this.http.post('https://jsonplaceholder.typicode.com/posts', newPost).subscribe(response => {
  this.data = response;
  });
}
}
