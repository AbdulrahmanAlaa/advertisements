import { TestBed, inject } from '@angular/core/testing';

import { AdvService } from './adv.service';

describe('AdvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvService]
    });
  });

  it('should be created', inject([AdvService], (service: AdvService) => {
    expect(service).toBeTruthy();
  }));
});
