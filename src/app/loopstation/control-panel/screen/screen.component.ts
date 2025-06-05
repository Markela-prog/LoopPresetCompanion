import { Component } from '@angular/core';
import { ScreenHeaderComponent } from './screen-header/screen-header.component';
import { ScreenContentComponent } from './screen-content/screen-content.component';

@Component({
  selector: 'app-screen',
  imports: [ScreenHeaderComponent, ScreenContentComponent],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss',
})
export class ScreenComponent {}
