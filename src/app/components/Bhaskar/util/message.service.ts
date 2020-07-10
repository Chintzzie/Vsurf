import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  	messageSource = new Subject<Message|Message[]>();
    clearSource = new Subject<string>();

	openModalSource=new Subject<string>();
	closeModalSource=new Subject<string>();


    messageObserver = this.messageSource.asObservable();
	clearObserver = this.clearSource.asObservable();

	openModalObserver=this.openModalSource.asObservable();
	closeModalObserver=this.closeModalSource.asObservable();

	openModal(name?:string){
		console.log("Onclick executed 2");
		this.openModalSource.next(name);
	}

	closeModal(name?:string){
		this.closeModalSource.next(name);
	}

    add(messages: Message[]) {

        if (messages) {

			messages.forEach((message)=>{
				if(!message.loactionName){
					message.loactionName="";
				}

				this.messageSource.next(message);
				if(!!message.life){
					setTimeout(()=>{
						this.clear(message.key);
					},message.life)
				}

			});

        }
    }

    clear(key) {
        this.clearSource.next(key);
	}

	clearAll(){
		this.clearSource.next("");
	}
}


export interface Message {
	loactionName?:string,
    severity?: string;
    summary?: string;
    detail?: string;
    id?: any;
    key?: string;
    life?: number;
    sticky?: boolean;
    closable?: boolean;
    data?: any;
}
