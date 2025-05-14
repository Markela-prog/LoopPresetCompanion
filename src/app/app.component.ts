import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LoopPresetCompanion';
  items = ['Item 1', 'Item 2', 'Item s3'];
}
