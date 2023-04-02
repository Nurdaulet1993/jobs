import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    StopPropagationDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StopPropagationDirective
  ]
})
export class SharedModule { }
