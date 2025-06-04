import { TestBed } from '@angular/core/testing';

import { AuthGoogleService } from './auth-google.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { OAuthServiceMock } from '../mocks/oauth-service.mock';

describe('AuthGoogleService', () => {
  let service: AuthGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: OAuthService,
          useValue: OAuthServiceMock,
        },
      ],
    });
    service = TestBed.inject(AuthGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
