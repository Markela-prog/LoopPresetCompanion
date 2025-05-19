import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthGoogleService } from './auth-google.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthGoogleService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
