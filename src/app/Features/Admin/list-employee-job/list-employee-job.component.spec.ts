import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeJobComponent } from './list-employee-job.component';

describe('ListEmployeeJobComponent', () => {
  let component: ListEmployeeJobComponent;
  let fixture: ComponentFixture<ListEmployeeJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeeJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
