import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetaskComponent } from './leavetask.component';

describe('LeavetaskComponent', () => {
  let component: LeavetaskComponent;
  let fixture: ComponentFixture<LeavetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
