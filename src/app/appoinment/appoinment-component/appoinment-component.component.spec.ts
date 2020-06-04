import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentComponentComponent } from './appoinment-component.component';

describe('AppoinmentComponentComponent', () => {
  let component: AppoinmentComponentComponent;
  let fixture: ComponentFixture<AppoinmentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
