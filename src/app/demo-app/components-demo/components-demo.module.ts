import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsListComponent } from './components-list/components-list.component';
import { BhaskarModule } from '../Bhaskar/bhaskar.module';




@NgModule({
  declarations: [ComponentsListComponent],
  imports: [
    CommonModule,
    BhaskarModule
  ]
})
export class ComponentsDemoModule { }
