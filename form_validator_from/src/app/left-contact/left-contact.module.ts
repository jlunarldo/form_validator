import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftContactComponent } from './left-contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, LeftContactComponent
  ], 
  exports:[LeftContactComponent]
})
export class LeftContactModule { }
