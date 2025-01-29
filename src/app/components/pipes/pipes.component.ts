import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipesPipe } from '../custom-pipes.pipe';
import { MyCustomTransformationPipe } from "../my-custom-transformation.pipe";

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, PercentPipe, LowerCasePipe, CustomPipesPipe, MyCustomTransformationPipe,JsonPipe],
  providers: [DecimalPipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  text = "Pipes Example";
  price = 140.0545;
  name = "Aspire Systems"; 
  purchasedOn = "2025-01-29";
  discount = 0.2; 
  format: string|undefined;
  title: string = "Json Pipe Example";

users = [
  { name: 'Jack', age: 30, email: 'jack@yahoo.com' },
  { name: 'Saranya', age: 25, email: 'saranya@example.com' },
  { name: 'Saran', age: 35, email: 'saran@gmail.com' }
];

}
