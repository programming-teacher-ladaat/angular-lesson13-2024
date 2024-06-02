import { TestBed } from '@angular/core/testing';

import { TrySubjectService } from './try-subject.service';

describe('TrySubjectService', () => {
  let service: TrySubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrySubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
