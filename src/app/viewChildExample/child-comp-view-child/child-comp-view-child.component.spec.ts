import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompViewChildComponent } from './child-comp-view-child.component';

describe('ChildCompViewChildComponent', () => {
  let component: ChildCompViewChildComponent;
  let fixture: ComponentFixture<ChildCompViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
