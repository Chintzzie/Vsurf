import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-demo',
  templateUrl: './container-demo.component.html',
  styleUrls: ['./container-demo.component.css']
})
export class ContainerDemoComponent implements OnInit {

  constructor() { }
  batchNo=0;

  ngOnInit(): void {
  }

  dataList:any[]=[
	{name:"Abhimanyu",prop1:250,prop2:500},
	{name: "Bhaskar",prop1:500,prop2:100},
	{name: "Chintzie",prop1:100,prop2:600},
	{name:"Manish",prop1:250,prop2:500},
	{name: "Pranav",prop1:500,prop2:100},
	{name:"Kaushik",prop1:250,prop2:500},
	{name: "Shubham",prop1:500,prop2:100},
	{name: "Rishab",prop1:100,prop2:600}
	];

	dataLists:any[]=[
		[	{name:"Sohail",prop1:250,prop2:500},{name: "Maneesh",prop1:500,prop2:100},{name: "Gaurav",prop1:100,prop2:600} ],
		[	{name:"Deepak",prop1:250,prop2:500},{name: "Adnan",prop1:500,prop2:100},{name: "Harris",prop1:100,prop2:600} ],
		[	{name:"Sahithi",prop1:250,prop2:500},{name: "Mounisha",prop1:500,prop2:100},{name: "Srujana",prop1:100,prop2:600} ]
	]


	loadMoreData(){
		setTimeout(()=>{
		if(this.batchNo<this.dataLists.length){
			this.dataList=this.dataList.concat(this.dataLists[this.batchNo]);
			this.batchNo+=1;
		}
		},3000);


	}

}
