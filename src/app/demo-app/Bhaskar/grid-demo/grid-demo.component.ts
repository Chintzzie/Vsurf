import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css']
})
export class GridDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataList:any[]=[
	{name:"A",prop1:250,prop2:500},
	{name: "B",prop1:500,prop2:100},
	{name: "C",prop1:100,prop2:600},
	{name:"A",prop1:250,prop2:500}
  ]

}
