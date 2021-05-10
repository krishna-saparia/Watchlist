import { TestBed } from '@angular/core/testing';

import { ShowService } from './tvmaze.service';

describe('ShowService', () => {
  let service: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
