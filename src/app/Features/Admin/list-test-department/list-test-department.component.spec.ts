import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestDepartmentComponent } from './list-test-department.component';

describe('ListTestDepartmentComponent', () => {
  let component: ListTestDepartmentComponent;
  let fixture: ComponentFixture<ListTestDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
