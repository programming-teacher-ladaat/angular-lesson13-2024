import { TestBed } from '@angular/core/testing';

import { TryObsService } from './try-obs.service';

describe('TryObsService', () => {
  let service: TryObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
