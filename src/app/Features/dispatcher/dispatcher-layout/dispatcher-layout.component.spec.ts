import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherLayoutComponent } from './dispatcher-layout.component';

describe('DispatcherLayoutComponent', () => {
  let component: DispatcherLayoutComponent;
  let fixture: ComponentFixture<DispatcherLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatcherLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatcherLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
