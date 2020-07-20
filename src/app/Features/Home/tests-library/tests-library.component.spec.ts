import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsLibraryComponent } from './tests-library.component';

describe('TestsLibraryComponent', () => {
  let component: TestsLibraryComponent;
  let fixture: ComponentFixture<TestsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
