import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDispatcherComponent } from './header-dispatcher.component';

describe('HeaderDispatcherComponent', () => {
  let component: HeaderDispatcherComponent;
  let fixture: ComponentFixture<HeaderDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
