import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { GridModule } from '../grid/grid.module';
import { ButtonGroupModule } from '../button-group/button-group.module';
import { UtilitiesModule } from '../util/utilities.module';
import { AutoCompleteModule } from '../auto-complete/auto-complete.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
	AutoCompleteModule,
	UtilitiesModule,
	ButtonGroupModule,
	GridModule,
	CommonModule
  ],
  exports:[ContainerComponent]
})
export class ContainerModule { }
