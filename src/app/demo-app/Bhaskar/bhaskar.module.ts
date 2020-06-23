import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BhaskarComponentsComponent } from './bhaskar-components/bhaskar-components.component';
import { ChipsDemoComponent } from './chips-demo/chips-demo.component';
import { ChipsModule } from '../../components/Bhaskar/chips/chips.module';
import { DragDropModule } from '../../components/Bhaskar/drag-drop/drag-drop';
import { PasswordModule } from '../../components/Bhaskar/password/password.module';
import { TableModule } from '../../components/Bhaskar/table/table.module';
import { DragdropDemoComponent } from './dragdrop-demo/dragdrop-demo.component';
import { PasswordDemoComponent } from './password-demo/password-demo.component';
import { AutoCompleteModule } from '../../components/Bhaskar/auto-complete/auto-complete.module';
import { InputboxModule } from '../../components/Bhaskar/inputbox/inputbox.module';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';

const routes=[
  {path:'dragdrop',component:DragdropDemoComponent},
  {path:'chips',component:ChipsDemoComponent},
  {path:'passwordStrength',component:PasswordDemoComponent},
  {path:'autocomplete',component:AutocompleteDemoComponent}
]

@NgModule({
  declarations: [BhaskarComponentsComponent,
     ChipsDemoComponent,
     DragdropDemoComponent,
     PasswordDemoComponent,
     AutocompleteDemoComponent],
  imports: [
    ChipsModule,
    DragDropModule,
    PasswordModule,
    TableModule,
    AutoCompleteModule,
    InputboxModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    BhaskarComponentsComponent
  ]
})
export class BhaskarModule { }
