import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartdayComponent } from './startday.component';

describe('StartdayComponent', () => {
  let component: StartdayComponent;
  let fixture: ComponentFixture<StartdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
