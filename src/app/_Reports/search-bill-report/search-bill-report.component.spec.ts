import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBillReportComponent} from './search-bill-report.component';

describe('SearchBillReportComponent', () => {
  let component: SearchBillReportComponent;
  let fixture: ComponentFixture<SearchBillReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBillReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
