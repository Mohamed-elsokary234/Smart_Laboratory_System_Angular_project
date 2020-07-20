import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterauthComponent } from './afterauth.component';

describe('AfterauthComponent', () => {
  let component: AfterauthComponent;
  let fixture: ComponentFixture<AfterauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
