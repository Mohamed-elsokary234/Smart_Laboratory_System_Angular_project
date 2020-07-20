import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientPercentAccordingToGenderComponent} from './patient-percent-according-to-gender.component';

describe('PatientPercentAccordingToGenderComponent', () => {
  let component: PatientPercentAccordingToGenderComponent;
  let fixture: ComponentFixture<PatientPercentAccordingToGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPercentAccordingToGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPercentAccordingToGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
