import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/components/Bhaskar/util/message.service';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.css']
})
export class ModalDemoComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }

  onClick(){
	  this.messageService.openModal("demo");
  }

}
