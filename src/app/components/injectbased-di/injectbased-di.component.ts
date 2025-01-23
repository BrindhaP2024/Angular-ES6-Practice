import { Component, OnInit, Inject } from '@angular/core';
import { InjectDIService } from '../../Service/inject-di.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-injectbased-di',
  imports:[CommonModule],
  templateUrl: './injectbased-di.component.html',
  styleUrls: ['./injectbased-di.component.css'] 
})
export class InjectbasedDIComponent implements OnInit {
    data: string[] = [];
  
    // Property-based injection using @Inject
    @Inject(InjectDIService) private injectdiservice!: InjectDIService;
  
    ngOnInit() {
        this.data = this.injectdiservice.getData();
    }
}
