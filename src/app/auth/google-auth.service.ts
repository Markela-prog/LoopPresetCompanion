import { Injectable, inject, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Injectable({ providedIn: 'root' })
export class AuthGoogleService {
  private oAuthService = inject(OAuthService);
  profile = signal<{ name: string; email: string; picture: string } | null>(null);

  constructor() {
    this.initConfiguration();
  }

  private initConfiguration() {
    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oAuthService.hasValidIdToken()) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const claims = this.oAuthService.getIdentityClaims() as any;
        this.profile.set({
          name: claims.name,
          email: claims.email,
          picture: claims.picture,
        });
      }
    });
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.logOut();
    this.profile.set(null);
  }

  isAuthenticated() {
    return this.oAuthService.hasValidIdToken();
  }
}
