import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultReportComponent} from './search-result-report.component';

describe('SearchResultReportComponent', () => {
  let component: SearchResultReportComponent;
  let fixture: ComponentFixture<SearchResultReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
