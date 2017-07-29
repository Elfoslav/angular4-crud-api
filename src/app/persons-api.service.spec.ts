import { TestBed, inject } from '@angular/core/testing';

import { PersonsApiService } from './persons-api.service';

describe('PersonsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonsApiService]
    });
  });

  it('should be created', inject([PersonsApiService], (service: PersonsApiService) => {
    expect(service).toBeTruthy();
  }));
});
