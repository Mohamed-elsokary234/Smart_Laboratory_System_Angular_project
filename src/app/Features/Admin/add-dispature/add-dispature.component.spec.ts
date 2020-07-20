import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDispatureComponent } from './add-dispature.component';

describe('AddDispatureComponent', () => {
  let component: AddDispatureComponent;
  let fixture: ComponentFixture<AddDispatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDispatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDispatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
