import { TestBed } from '@angular/core/testing';

import { CryptomusService } from './cryptomus.service';

describe('CryptomusService', () => {
  let service: CryptomusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptomusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
