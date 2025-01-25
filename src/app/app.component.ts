import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComponentServiceComponent } from "./components/component-service/component-service.component";
import { CardComponent } from "./components/card/card.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Angular-test-app';
}
