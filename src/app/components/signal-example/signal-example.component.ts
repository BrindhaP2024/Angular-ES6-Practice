import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { UserService } from '../../Service/user-service.service';


@Component({
  selector: 'app-signal-example',
  templateUrl: './signal-example.component.html',
  styleUrls: ['./signal-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalExampleComponent {
  // Correctly inject the UserService
  userService = inject(UserService); // This will inject the UserService as expected

  // Signal for count
  count = signal(0);

  // Computed signals for price and taxRate
  price = signal(100);
  taxRate = signal(0.1);

  // Computed signal to calculate total price
  totalPrice = computed(() => this.price() * (1 + this.taxRate()));

  constructor() {
    // Effect to log the count when it changes
    effect(() => {
      console.log(`count has changed: ${this.count()}`);
    });

    // Initially set the user ID
    this.userService.setUserId(1);

  }

  // Method to change the user ID
  changeUserId() {
    this.userService.setUserId(Math.floor(Math.random() * 100));
  }

  // Method to increment the count signal
  increment(): void {
    this.count.set(this.count() + 1);
  }
}
