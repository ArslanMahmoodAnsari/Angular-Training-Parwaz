import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompViewChildComponent } from './parent-comp-view-child.component';

describe('ParentCompViewChildComponent', () => {
  let component: ParentCompViewChildComponent;
  let fixture: ComponentFixture<ParentCompViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCompViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCompViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
