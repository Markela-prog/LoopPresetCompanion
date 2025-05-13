import { Component, inject } from '@angular/core';
import { AuthGoogleService } from '../auth/auth-google.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService = inject(AuthGoogleService);
  profile = this.authService.profile;

  onToggleAuth() {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }
}
