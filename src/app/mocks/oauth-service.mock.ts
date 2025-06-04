import { OAuthService } from 'angular-oauth2-oidc';

export const OAuthServiceMock: Partial<OAuthService> = {
  configure: () => {},
  loadDiscoveryDocumentAndTryLogin: () => Promise.resolve(true),
  hasValidIdToken: () => true,
  getIdentityClaims: () => ({}),
  setStorage: () => {},
};
