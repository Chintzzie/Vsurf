import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { GridModule } from '../grid/grid.module';
import { ButtonGroupModule } from '../button-group/button-group.module';
import { UtilitiesModule } from '../util/utilities.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
	  UtilitiesModule,
	ButtonGroupModule,
	GridModule,
    CommonModule
  ],
  exports:[ContainerComponent]
})
export class ContainerModule { }
