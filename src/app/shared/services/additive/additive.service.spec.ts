import { TestBed, inject } from '@angular/core/testing';

import { AdditiveService } from './additive.service';

describe('AdditiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdditiveService]
    });
  });

  it('should be created', inject([AdditiveService], (service: AdditiveService) => {
    expect(service).toBeTruthy();
  }));
});
