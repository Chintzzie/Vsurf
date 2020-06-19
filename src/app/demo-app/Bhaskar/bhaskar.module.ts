import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BhaskarComponentsComponent } from './bhaskar-components/bhaskar-components.component';
import { ChipsDemoComponent } from './chips-demo/chips-demo.component';
import { ChipsModule } from 'src/app/components/Bhaskar/chips/chips.module';
import { DragDropModule } from 'src/app/components/Bhaskar/drag-drop/drag-drop';
import { PasswordModule } from 'src/app/components/Bhaskar/password/password.module';
import { TableModule } from 'src/app/components/Bhaskar/table/table.module';
import { DragdropDemoComponent } from './dragdrop-demo/dragdrop-demo.component';
import { PasswordDemoComponent } from './password-demo/password-demo.component';

const routes=[
  {path:'dragdrop',component:DragdropDemoComponent},
  {path:'chips',component:ChipsDemoComponent},
  {path:'passwordStrength',component:PasswordDemoComponent}
]

@NgModule({
  declarations: [BhaskarComponentsComponent,
     ChipsDemoComponent,
     DragdropDemoComponent,
     PasswordDemoComponent],
  imports: [
    ChipsModule,
    DragDropModule,
    PasswordModule,
    TableModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    BhaskarComponentsComponent
  ]
})
export class BhaskarModule { }
