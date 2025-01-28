import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipesPipe } from '../custom-pipes.pipe';
import { MyCustomTransformationPipe } from "../my-custom-transformation.pipe";

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, PercentPipe, LowerCasePipe, CustomPipesPipe, MyCustomTransformationPipe],
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
}
