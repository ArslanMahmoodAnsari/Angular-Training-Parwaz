import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompServiceComponent } from './child-comp-service.component';

describe('ChildCompServiceComponent', () => {
  let component: ChildCompServiceComponent;
  let fixture: ComponentFixture<ChildCompServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
