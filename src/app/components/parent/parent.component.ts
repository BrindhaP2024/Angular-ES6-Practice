import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: true,
  imports: [],
})
export class ParentComponent {
  productName = 'Laptop';
  productPrice = 1000;
  productDescription = '   High-performance laptop   ';
  productStock = 50;
  productDiscountedPrice = this.productPrice * 0.9;
}