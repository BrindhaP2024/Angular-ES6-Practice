import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectDIService {
  getData(): string[] {
    return ['Constructor-based DI', 'Inject-based DI'];
  }
}
