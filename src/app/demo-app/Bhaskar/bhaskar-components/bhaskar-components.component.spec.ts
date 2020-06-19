import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaskarComponentsComponent } from './bhaskar-components.component';

describe('BhaskarComponentsComponent', () => {
  let component: BhaskarComponentsComponent;
  let fixture: ComponentFixture<BhaskarComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhaskarComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhaskarComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
