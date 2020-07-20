import { TestBed } from '@angular/core/testing';

import { SampelService } from './sampel.service';

describe('SampelService', () => {
  let service: SampelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
