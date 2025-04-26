import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftContactModule } from "./left-contact/left-contact.module";
import { LeftContactComponent } from "./left-contact/left-contact.component";
import { RightFormComponent } from "./right-form/right-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftContactModule, RightFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form_validator_from'; 
}
