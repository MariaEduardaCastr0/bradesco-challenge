import { TestBed } from '@angular/core/testing';

import { GlobalEventService } from './global-event.service';

describe('GlobalEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalEventService = TestBed.get(GlobalEventService);
    expect(service).toBeTruthy();
  });
});
