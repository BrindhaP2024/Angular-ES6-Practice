import { Component, model } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink} from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { ParentComponent } from "./components/parent/parent.component";
import { FormsModule } from '@angular/forms';
import { NgTemplateComponent } from "./components/ng-template/ng-template.component";
import { SignalExampleComponent } from "./components/signal-example/signal-example.component";
import { SignalsRxjsComponent } from "./components/signals-rxjs/signals-rxjs.component";
import { TemplateDrivenFormComponent } from "./components/template-driven-form/template-driven-form.component";
import { UserManagementComponent } from "./components/user-management/user-management.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, TemplateDrivenFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-test-app';
  hmrUpdates = model();
  login:any;
  logOff:any;
}
