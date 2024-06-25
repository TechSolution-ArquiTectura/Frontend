import { TestBed } from '@angular/core/testing';

import { CoinMarketCriptoService } from './coin-market-cripto.service';

describe('CoinMarketCriptoService', () => {
  let service: CoinMarketCriptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinMarketCriptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
