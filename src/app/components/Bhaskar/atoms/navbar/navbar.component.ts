import { Component, OnInit, ViewEncapsulation, ContentChild, ContentChildren, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { VsfTemplateDirective } from '../../util/vsf-template.directive';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'vsf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit,AfterContentInit {

	@ContentChildren(VsfTemplateDirective) navTemplatesRef:QueryList<VsfTemplateDirective>;

  constructor() { }

  NAV_LOGO_TAG="logo";
  NAV_COLLAPSIBLE_TAG="collapsible";
  NAV_INCOLLAPSIBLE_TAG="incollapsible";

  logoTemplate:TemplateRef<any>;
  incollapsibleNavTemplate:TemplateRef<any>
  collapsibleNavTemplate:TemplateRef<any>;


  isNavActive:boolean=false;

  isBurgerOpened:boolean=false;

  ngOnInit(): void {
  }

  burgerClicked(){
	  this.isNavActive=!this.isNavActive;
	  this.isBurgerOpened=!this.isBurgerOpened;

  }

	ngAfterContentInit(): void {
		if(!!this.navTemplatesRef){
			this.navTemplatesRef.forEach((navTemplateRef)=>{
				switch (navTemplateRef.getName()) {
					case (this.NAV_LOGO_TAG):
						this.logoTemplate=navTemplateRef.getTemplate();
						break;

					case(this.NAV_COLLAPSIBLE_TAG):
						this.collapsibleNavTemplate=navTemplateRef.getTemplate();
						break;

					case(this.NAV_INCOLLAPSIBLE_TAG):
						this.incollapsibleNavTemplate=navTemplateRef.getTemplate();
						break;

					default:
						break;
				}

			})
		}
	}

}
