import { TestBed } from '@angular/core/testing';

import { AuthGoogleService } from './auth-google.service';
import { OAuthService } from 'angular-oauth2-oidc';

describe('AuthGoogleService', () => {
  let service: AuthGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: OAuthService,
          useValue: {
            configure: () => {},
            loadDiscoveryDocumentAndTryLogin: () => Promise.resolve(),
            hasValidIdToken: () => true,
            getIdentityClaims: () => ({}),
            setStorage: () => {},
          },
        },
      ],
    });
    service = TestBed.inject(AuthGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
