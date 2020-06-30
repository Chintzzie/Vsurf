import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vsf-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit,AfterViewInit {

	@Input() gridStyle:any={};
	constructor() { }

	gridContainerElement:HTMLDivElement;

	ngAfterViewInit(): void {
	}

	ngOnInit(): void {

	}

}
