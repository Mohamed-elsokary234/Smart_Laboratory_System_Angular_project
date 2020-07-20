import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientPercentAccordingToAgeComponent} from './patient-percent-according-to-age.component';

describe('PatientPercentAccordingToAgeComponent', () => {
  let component: PatientPercentAccordingToAgeComponent;
  let fixture: ComponentFixture<PatientPercentAccordingToAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPercentAccordingToAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPercentAccordingToAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
