import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompServiceComponent } from './parent-comp-service.component';

describe('ParentCompServiceComponent', () => {
  let component: ParentCompServiceComponent;
  let fixture: ComponentFixture<ParentCompServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCompServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCompServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
