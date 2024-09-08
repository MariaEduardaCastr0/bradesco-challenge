import { TestBed } from '@angular/core/testing';

import { MakeRequestsService } from './make-requests.service';

describe('MakeRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeRequestsService = TestBed.get(MakeRequestsService);
    expect(service).toBeTruthy();
  });
});
