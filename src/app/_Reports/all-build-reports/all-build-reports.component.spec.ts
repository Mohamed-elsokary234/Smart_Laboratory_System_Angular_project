import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllBuildReportsComponent} from './all-build-reports.component';

describe('AllBuildReportsComponent', () => {
  let component: AllBuildReportsComponent;
  let fixture: ComponentFixture<AllBuildReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBuildReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBuildReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
