import { signal } from '@angular/core';
import { AuthGoogleService } from '../auth/auth-google.service';
import { Profile } from '../models/profile';

export const AuthGoogleServiceMock: Partial<AuthGoogleService> = {
  profile: signal({} as Profile),
};
