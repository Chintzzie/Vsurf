import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop-demo',
  templateUrl: './dragdrop-demo.component.html',
  styleUrls: ['./dragdrop-demo.component.css']
})
export class DragdropDemoComponent implements OnInit {


  Names={"availableEvents":[],"selectedEvents" :[],"droppableEvents":[]}

  constructor() { }

  ngOnInit(): void {
      this.Names["availableEvents"]=["abc","def","ghi","jkl"];
  }

  dropped(eventData){
    let sourceList:Event[]=this.Names[eventData.sourceLocation];
    let targetList:Event[]=this.Names[eventData.targetLocation];
    let draggedEvent:Event=eventData.draggedData;

    targetList=[...targetList,draggedEvent];
    sourceList=sourceList.filter((event)=>event!=draggedEvent);

    this.Names[eventData.sourceLocation]=sourceList;
    this.Names[eventData.targetLocation]=targetList;

  }

}
