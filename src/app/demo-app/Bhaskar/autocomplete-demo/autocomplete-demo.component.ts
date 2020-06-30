import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.css']
})
export class AutocompleteDemoComponent implements OnInit {

  constructor() { }

  suggestionsList=["abgc","def","ghi","jkl","zxc","hgz","ozpa","aaaaaaaaaaaaaaaa"];

  ngOnInit(): void {
  }

  completeTriggered(){
    console.log("complete triggered");
  }

}
