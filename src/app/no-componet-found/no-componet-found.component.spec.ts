import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComponetFoundComponent } from './no-componet-found.component';

describe('NoComponetFoundComponent', () => {
  let component: NoComponetFoundComponent;
  let fixture: ComponentFixture<NoComponetFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoComponetFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoComponetFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
