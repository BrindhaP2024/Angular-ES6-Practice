import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Define a signal for userId with an initial value of 0
  private userId = signal<number>(0);

  constructor() {}

  // Method to update the userId value
  setUserId(id: number): void {
    this.userId.set(id); // Update the signal value
  }

  // Method to get the current userId value
  getUserId(): number {
    return this.userId(); // Access the signal value
  }
}
