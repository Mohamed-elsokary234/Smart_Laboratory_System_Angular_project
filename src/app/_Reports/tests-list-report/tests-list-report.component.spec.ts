import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestsListReportComponent} from './tests-list-report.component';

describe('TestsListReportComponent', () => {
  let component: TestsListReportComponent;
  let fixture: ComponentFixture<TestsListReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsListReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
