import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() imageWidth: Number=50;
  @Input() marginWidth: Number=2;
  @Input() url: string= '';
  @Input() imageHeight: Number=50;

  constructor() { }

  ngOnInit(): void {
  }

}
