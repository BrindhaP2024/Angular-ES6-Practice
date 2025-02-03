import { JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-data',
  standalone: true,
  imports: [NgIf, JsonPipe, HttpClientModule],
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})
export class HttpDataComponent implements OnInit {
  data: any;
  data1: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData1(): void {
    this.http.get('https://dummy-json.mock.beeceptor.com/roles').subscribe(response => {
      this.data1 = response;
    });
  }

  getData(): void {
    this.http.get('https://dummyjson.com/test').subscribe(response => {
      this.data = response;
    });
  }

  postData(): void {
    const newPost = { title: 'New Post', content: 'This is the content of the new post' };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://dummyjson.com/posts', newPost, { headers }).subscribe(response => {
      this.data = response;
    });
  }
}
