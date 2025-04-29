import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftContactComponent } from './left-contact/left-contact.component';
import { RightFormComponent } from './right-form/right-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    LeftContactComponent,
    RightFormComponent, BrowserAnimationsModule  
  ]
})
export class AppModule { }
