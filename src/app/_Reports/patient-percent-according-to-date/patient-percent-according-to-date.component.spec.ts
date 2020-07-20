import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientPercentAccordingToDateComponent} from './patient-percent-according-to-date.component';

describe('PatientPercentAccordingToDateComponent', () => {
  let component: PatientPercentAccordingToDateComponent;
  let fixture: ComponentFixture<PatientPercentAccordingToDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPercentAccordingToDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPercentAccordingToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
