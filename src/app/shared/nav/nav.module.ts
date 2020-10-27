import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    NavComponent
  ]
})
export class NavModule { }
