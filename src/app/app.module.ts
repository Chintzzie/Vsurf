import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsDemoModule } from './demo-app/components-demo/components-demo.module';
import { ComponentsListComponent } from './demo-app/components-demo/components-list/components-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    ComponentsDemoModule,
	BrowserModule,
	RouterModule.forRoot([
		{path:'',component:ComponentsListComponent}
	  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
