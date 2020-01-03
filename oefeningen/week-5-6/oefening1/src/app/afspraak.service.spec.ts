import { TestBed } from '@angular/core/testing';

import { AfspraakService } from './afspraak.service';

describe('AfspraakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfspraakService = TestBed.get(AfspraakService);
    expect(service).toBeTruthy();
  });
});
