import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { ScrollerModule } from '../../atoms/scroller/scroller.module';
import { ScrollPanelModule } from 'src/app/components/Pavan/scrollpanel/scrollpanel.module';



@NgModule({
  declarations: [GridComponent],
  imports: [
	ScrollPanelModule,
	CommonModule,
	ScrollerModule
  ],
  exports:[
	  GridComponent
  ]
})
export class GridModule { }
