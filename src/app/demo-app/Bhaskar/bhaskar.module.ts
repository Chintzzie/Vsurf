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
import { GridModule } from '../../components/Bhaskar/molecules/grid/grid.module';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { ContainerDemoComponent } from './container-demo/container-demo.component';
import { ContainerModule } from '../../components/Bhaskar/organism/container/container.module';
import { UtilitiesModule } from '../../components/Bhaskar/util/utilities.module';
import { MessageDemoComponent } from './message-demo/message-demo.component';
import { MessageModule } from 'src/app/components/Bhaskar/atoms/message/message.module';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';
import { ModalModule } from 'src/app/components/Bhaskar/atoms/modal/modal.module';
import { NavbarDemoComponent } from './navbar-demo/navbar-demo.component';
import { NavbarModule } from 'src/app/components/Bhaskar/atoms/navbar/navbar.module';

const routes=[
  {path:'dragdrop',component:DragdropDemoComponent},
  {path:'chips',component:ChipsDemoComponent},
  {path:'passwordStrength',component:PasswordDemoComponent},
  {path:'autocomplete',component:AutocompleteDemoComponent},
  {path:'grid',component:GridDemoComponent},
  {path:'container',component:ContainerDemoComponent},
  {path:'message',component:MessageDemoComponent},
  {path: 'modal',component:ModalDemoComponent},
  {path: 'navbar',component:NavbarDemoComponent}
]

@NgModule({
  declarations: [BhaskarComponentsComponent,
     ChipsDemoComponent,
     DragdropDemoComponent,
     PasswordDemoComponent,
     AutocompleteDemoComponent,
     GridDemoComponent,
     ContainerDemoComponent,
     MessageDemoComponent,
     ModalDemoComponent,
     NavbarDemoComponent],
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
	MessageModule,
	ModalModule,
	NavbarModule,
    CommonModule
  ],
  exports:[
    BhaskarComponentsComponent
  ]
})
export class BhaskarModule { }
