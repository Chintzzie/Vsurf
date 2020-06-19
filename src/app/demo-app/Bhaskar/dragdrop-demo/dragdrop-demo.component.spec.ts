import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropDemoComponent } from './dragdrop-demo.component';

describe('DragdropDemoComponent', () => {
  let component: DragdropDemoComponent;
  let fixture: ComponentFixture<DragdropDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
