import { TestBed } from '@angular/core/testing';

import { SevillanoService } from './sevillano.service';

describe('SevillanoService', () => {
  let service: SevillanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevillanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
