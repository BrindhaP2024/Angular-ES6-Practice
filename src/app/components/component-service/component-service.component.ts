import { Component } from '@angular/core';
import { DataserviceService } from '../../Service/dataservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-service',
  imports: [CommonModule],
  templateUrl: './component-service.component.html',
  styleUrl: './component-service.component.css'
})
export class ComponentServiceComponent {
   title : String = "Learning Angular Services";
  //  title = 'Dependency Injection Example';
  data: string[] = [];

  constructor(private dataserviceservice: DataserviceService) { }

  ngOnInit() {
    this.data = this.dataserviceservice.getData();
  

}
}
