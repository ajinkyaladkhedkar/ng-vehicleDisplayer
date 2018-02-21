import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormComponentComponent } from './vehicle-form-component.component';

describe('VehicleFormComponentComponent', () => {
  let component: VehicleFormComponentComponent;
  let fixture: ComponentFixture<VehicleFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
