import { TestBed } from '@angular/core/testing';

import { YtVideoService } from './yt-video.service';

describe('YtVideoService', () => {
  let service: YtVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
