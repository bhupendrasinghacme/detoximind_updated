import { TestBed } from '@angular/core/testing';

import { JournalnotesService } from './journalnotes.service';

describe('JournalnotesService', () => {
  let service: JournalnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
