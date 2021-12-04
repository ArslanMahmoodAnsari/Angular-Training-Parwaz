import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedAuthComponent } from './need-auth.component';

describe('NeedAuthComponent', () => {
  let component: NeedAuthComponent;
  let fixture: ComponentFixture<NeedAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
