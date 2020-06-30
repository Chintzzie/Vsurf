import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vsf-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

	constructor() { }

	@Input() dataList:any[]=[];

	@Input() sortingProperties=[];

	isAscendingOrder={};

	ngOnInit(): void {

		this.sortingProperties.forEach((sortingProperty)=>{
			this.isAscendingOrder[sortingProperty]=false;
		});

	}

	sortBy(property){
		this.dataList.sort((a,b):number=>{
			if(a[property]>b[property])
				return 1
			else if((a[property]<b[property]))
				return -1
			else
				return 0
		})
		if(this.isAscendingOrder[property]){
			this.dataList=this.dataList.reverse();
		}
		this.isAscendingOrder[property]=!this.isAscendingOrder[property];
	}

	sortButtonClicked(button){
		this.sortBy(button);
	}

}
