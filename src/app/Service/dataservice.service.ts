import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  getData() {
    return ['Introduction to Angular', 'Components', 'Services','Dependency Injection'];
  
}
}
