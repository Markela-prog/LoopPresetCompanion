import { Injectable, inject, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';
import { Profile } from '../models/profile';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGoogleService {
  profile = signal<Profile | null>(null);
  private oAuthService = inject(OAuthService);
  private router = inject(Router);

  constructor() {
    this.initConfiguration();
    this.listenToStorageChanges();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
    this.profile.set(null);
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this.oAuthService.hasValidIdToken();
  }

  private listenToStorageChanges() {
    window.addEventListener('storage', (event) => {
      if (
        event.key === 'access_token' ||
        event.key === 'id_token' ||
        event.key === 'oauth2_test_storage'
      ) {
        this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
          this.updateProfile();
        });
      }
    });
  }

  private initConfiguration() {
    this.oAuthService.configure(authConfig);
    this.oAuthService.setStorage(localStorage);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.updateProfile();
    });
  }

  private updateProfile() {
    if (this.oAuthService.hasValidIdToken()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const claims = this.oAuthService.getIdentityClaims() as any;
      if (claims) {
        this.profile.set({
          name: claims.name,
          email: claims.email,
          picture: claims.picture,
        });
      }
    } else {
      this.profile.set(null);
    }
  }
}
