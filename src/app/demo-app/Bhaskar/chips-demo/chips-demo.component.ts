import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips-demo',
  templateUrl: './chips-demo.component.html',
  styleUrls: ['./chips-demo.component.css']
})
export class ChipsDemoComponent implements OnInit {

  values1:string[]=["Hobbs","Shaw","Xander"];
  values2:string[]=["Putin","Modi","Trump"];
  constructor() { }

  ngOnInit(): void {
  }

}
