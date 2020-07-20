import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DminProfileComponent } from './dmin-profile.component';

describe('DminProfileComponent', () => {
  let component: DminProfileComponent;
  let fixture: ComponentFixture<DminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
