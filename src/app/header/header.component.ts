import { Component, inject } from '@angular/core';
import { AuthGoogleService } from '../auth/google-auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService = inject(AuthGoogleService);
  profile = this.authService.profile;

  onToggleAuth() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.authService.isAuthenticated() ? this.authService.logout() : this.authService.login();
    // if (this.authService.isAuthenticated()) {
    //   this.authService.logout();
    // } else {
    //   this.authService.login();
    // }
  }
}
