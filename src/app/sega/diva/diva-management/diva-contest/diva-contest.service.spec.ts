import {TestBed} from '@angular/core/testing';

import {DivaContestService} from './diva-contest.service';

describe('DivaContestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivaContestService = TestBed.get(DivaContestService);
    expect(service).toBeTruthy();
  });
});
