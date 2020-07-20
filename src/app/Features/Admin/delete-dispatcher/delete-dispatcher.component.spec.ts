import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDispatcherComponent } from './delete-dispatcher.component';

describe('DeleteDispatcherComponent', () => {
  let component: DeleteDispatcherComponent;
  let fixture: ComponentFixture<DeleteDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
