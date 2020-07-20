import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsDepartmentsComponent } from './tests-departments.component';

describe('TestsDepartmentsComponent', () => {
  let component: TestsDepartmentsComponent;
  let fixture: ComponentFixture<TestsDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
