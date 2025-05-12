import { TestBed } from '@angular/core/testing';

import { AuthGoogleService } from './google-auth.service';

describe('GoogleAuthService', () => {
  let service: AuthGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
