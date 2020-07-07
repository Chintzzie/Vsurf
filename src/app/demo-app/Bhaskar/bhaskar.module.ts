import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BhaskarComponentsComponent } from './bhaskar-components/bhaskar-components.component';
import { ChipsDemoComponent } from './chips-demo/chips-demo.component';
import { ChipsModule } from '../../components/Bhaskar/atoms/chips/chips.module';
import { DragDropModule } from '../../components/Bhaskar/atoms/drag-drop/drag-drop';
import { PasswordModule } from '../../components/Bhaskar/atoms/password/password.module';
import { TableModule } from '../../components/Bhaskar/organism/table/table.module';
import { DragdropDemoComponent } from './dragdrop-demo/dragdrop-demo.component';
import { PasswordDemoComponent } from './password-demo/password-demo.component';
import { AutoCompleteModule } from '../../components/Bhaskar/molecules/auto-complete/auto-complete.module';
import { InputboxModule } from '../../components/Bhaskar/atoms/inputbox/inputbox.module';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import { GridModule } from 'src/app/components/Bhaskar/molecules/grid/grid.module';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { ContainerDemoComponent } from './container-demo/container-demo.component';
import { ContainerModule } from 'src/app/components/Bhaskar/organism/container/container.module';
import { UtilitiesModule } from 'src/app/components/Bhaskar/util/utilities.module';

const routes=[
  {path:'dragdrop',component:DragdropDemoComponent},
  {path:'chips',component:ChipsDemoComponent},
  {path:'passwordStrength',component:PasswordDemoComponent},
  {path:'autocomplete',component:AutocompleteDemoComponent},
  {path:'grid',component:GridDemoComponent},
  {path:'container',component:ContainerDemoComponent}
]

@NgModule({
  declarations: [BhaskarComponentsComponent,
     ChipsDemoComponent,
     DragdropDemoComponent,
     PasswordDemoComponent,
     AutocompleteDemoComponent,
     GridDemoComponent,
     ContainerDemoComponent],
  imports: [
	RouterModule.forChild(routes),
	UtilitiesModule,
	ContainerModule,
	GridModule,
    ChipsModule,
    DragDropModule,
    PasswordModule,
    TableModule,
    AutoCompleteModule,
    InputboxModule,
    CommonModule
  ],
  exports:[
    BhaskarComponentsComponent
  ]
})
export class BhaskarModule { }
