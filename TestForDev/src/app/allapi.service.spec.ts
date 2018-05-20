import { TestBed, inject } from '@angular/core/testing';

import { AllapiService } from './allapi.service';

describe('AllapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllapiService]
    });
  });

  it('should be created', inject([AllapiService], (service: AllapiService) => {
    expect(service).toBeTruthy();
  }));
});
