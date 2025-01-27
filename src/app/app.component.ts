import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink} from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { ParentComponent } from "./components/parent/parent.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Angular-test-app';
}
