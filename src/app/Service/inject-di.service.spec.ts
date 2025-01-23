import { TestBed } from '@angular/core/testing';

import { InjectDIService } from './inject-di.service';

describe('InjectDIService', () => {
  let service: InjectDIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectDIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
