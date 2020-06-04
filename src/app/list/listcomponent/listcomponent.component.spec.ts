import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LISTComponentComponent } from './listcomponent.component';

describe('LISTComponentComponent', () => {
  let component: LISTComponentComponent;
  let fixture: ComponentFixture<LISTComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LISTComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LISTComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
