import { ChangeDetectionStrategy, Component,input,signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signals-rxjs',
  imports: [],
  templateUrl: './signals-rxjs.component.html',
  styleUrl: './signals-rxjs.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalsRxjsComponent {
  count = signal(0);
  // @input() value = signal('Default Value');

  constructor(){
    interval(1000).subscribe(() =>{
       this.count.set(this.count()+1);
    })
  }
}
