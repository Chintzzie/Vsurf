import { Component, OnInit, AfterContentInit, ContentChild, TemplateRef, QueryList, ContentChildren, Input } from '@angular/core';
import { MessageService, Message } from '../../util/message.service';
import { VsfTemplateDirective } from '../../util/vsf-template.directive';

@Component({
  selector: 'vsf-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit,AfterContentInit {

	@Input() name:string="";

	@Input() position:string="top-right";

	@ContentChildren(VsfTemplateDirective) customMessageTemplateRef:QueryList<VsfTemplateDirective>;

	constructor(public messageService:MessageService) { }

	CUSTOM_MESSAGE_TEMPLATE_TAG="message"

	messages:Message[]=[];

	customMessageTemplate:TemplateRef<any>;

	ngOnInit(): void {
	}

  ngAfterContentInit(): void {

	if(!!this.customMessageTemplateRef){
		this.customMessageTemplateRef.forEach(templateRef=>{
			if(templateRef.getName()==this.CUSTOM_MESSAGE_TEMPLATE_TAG){
				this.customMessageTemplate=templateRef.getTemplate();
				return;
			}
		})
	}

	this.messageService.messageObserver.subscribe((newMsg:Message)=>{
		if(this.name!=newMsg.loactionName)
			return;
		this.messages=[...this.messages,newMsg];
		console.log(this.messages)
	})

	this.messageService.clearObserver.subscribe((key)=>{
		if (key==""){
			this.messages=[];
			return;
		}
		for (let index = 0; index < this.messages.length; index++) {
			if (this.messages[index].key==key){
				let tempMessages:Message[]=[...this.messages];
				this.messages=tempMessages.slice(0,index);
				tempMessages.slice(index+1).forEach(message=>{
					this.messages.push(message);
				})
				this.messages=[...this.messages];
				break;
			}

		}
	})


}

	closeClicked(key){
		this.messageService.clearSource.next(key);
	}



}
