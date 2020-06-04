import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourappoinmentComponent } from './yourappoinment.component';

describe('YourappoinmentComponent', () => {
  let component: YourappoinmentComponent;
  let fixture: ComponentFixture<YourappoinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourappoinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
