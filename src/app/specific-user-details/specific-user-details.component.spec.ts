import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificUserDetailsComponent } from './specific-user-details.component';

describe('SpecificUserDetailsComponent', () => {
  let component: SpecificUserDetailsComponent;
  let fixture: ComponentFixture<SpecificUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
