import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.css']
})
export class AutocompleteDemoComponent implements OnInit {

  constructor() { }

  autocompleteval="";

  suggestionsList=["abgc","def","ghi","jkl","zxc","hgz","ozpa","aaaaaaaaaaaaaaaa"];

  suggestions;

  ngOnInit(): void {
  }

  completeTriggered(){
    console.log("complete triggered");
  }

  suggestionUpdater(key:string){

    key=key.toLowerCase();
    this.suggestions= this.suggestionsList.filter((value)=>value.toLowerCase().indexOf(key)!=-1)

  }

}
