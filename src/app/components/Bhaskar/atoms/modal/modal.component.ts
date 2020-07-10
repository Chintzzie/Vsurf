import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChildren, QueryList, TemplateRef, Input } from '@angular/core';
import { MessageService } from '../../util/message.service';
import { VsfTemplateDirective } from '../../util/vsf-template.directive';

@Component({
  selector: 'vsf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,AfterContentInit {

	@Input() name:string="";

	@ContentChildren(VsfTemplateDirective) customModalTemplateRef:QueryList<VsfTemplateDirective>;

	constructor(public messageService:MessageService) { }

	CUSTOM_MODAL_TEMPLATE_TAG="modal";



	showModal:boolean=false;

	customModalTemplate:TemplateRef<any>;


	ngOnInit(): void {
	}

	ngAfterContentInit(): void {

		if(!!this.customModalTemplateRef){
			this.customModalTemplateRef.forEach(templateRef=>{
				if(templateRef.getName()==this.CUSTOM_MODAL_TEMPLATE_TAG){
					this.customModalTemplate=templateRef.getTemplate();
					return;
				}
			})
		}


		this.messageService.openModalObserver.subscribe((name)=>{
			if(this.name!=name)
				return;
			this.showModal=true;

		});

		this.messageService.closeModalObserver.subscribe(()=>{
			if(this.showModal)
				this.showModal=false;
		})
	}

	triggerClose(){
		this.showModal=false;
	}



}
