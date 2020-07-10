import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/components/Bhaskar/util/message.service';

@Component({
  selector: 'app-message-demo',
  templateUrl: './message-demo.component.html',
  styleUrls: ['./message-demo.component.css']
})
export class MessageDemoComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }

  	clickedInfo(){

	  this.messageService.add([{loactionName:"alpha",life:6000,severity:"info",summary:"First Message",detail:"asdjnsd sdjfgsd fisjfosj",
								key:"abc"}]);
  	}

  	clickedError(){

		this.messageService.add([{loactionName:"alpha",life:6000,severity:"error",summary:"First Message",detail:"asdjnsd sdjfgsd fisjfosj",
							  key:"abc"}]);
	}

	clickedWarning(){

		this.messageService.add([{loactionName:"alpha",life:6000,severity:"warning",summary:"First Message",detail:"asdjnsd sdjfgsd fisjfosj",
							  key:"abc"}]);
	}

	clickedBeta(){

		this.messageService.add([{loactionName:"beta",life:6000,severity:"success",summary:"First Message",detail:"asdjnsd sdjfgsd fisjfosj",
							  key:"abc"}]);
	}

  clearClicked(){
	  this.messageService.clearAll();
  }


}
