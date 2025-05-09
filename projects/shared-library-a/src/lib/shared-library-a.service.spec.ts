import { TestBed } from '@angular/core/testing';

import { SharedLibraryAService } from './shared-library-a.service';

describe('SharedLibraryAService', () => {
  let service: SharedLibraryAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLibraryAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
