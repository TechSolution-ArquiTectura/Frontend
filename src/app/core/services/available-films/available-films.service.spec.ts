import { TestBed } from '@angular/core/testing';

import { AvailableFilmsService } from './available-films.service';

describe('AvailableFilmsService', () => {
  let service: AvailableFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
