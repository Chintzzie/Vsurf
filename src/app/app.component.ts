import { Component, OnInit, ViewChild } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Vsurf-DEMO';
  currentUser;
  toastMsg:String="Initial Message";

  constructor(){

  }
  ngOnInit(): void {
  }



}
