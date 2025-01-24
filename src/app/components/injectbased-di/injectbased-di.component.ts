import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectDIService } from '../../Service/inject-di.service';

@Component({
  selector: 'app-injectbased-di',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './injectbased-di.component.html',
  styleUrls: ['./injectbased-di.component.css']
})
export class InjectbasedDIComponent implements OnInit {
  data: string[] = [];
  private injectdiservice = inject(InjectDIService);

  ngOnInit() {
    if (this.injectdiservice) {
      this.data = this.injectdiservice.getData();
    } else {
      console.error('InjectDIService is not injected!');
    }
  }
}
