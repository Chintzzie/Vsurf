import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-password-demo',
  templateUrl: './password-demo.component.html',
  styleUrls: ['./password-demo.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PasswordDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
