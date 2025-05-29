import { Component } from '@angular/core';
import { LoopstationComponent } from './loopstation/loopstation.component';

@Component({
  selector: 'app-root',
  imports: [LoopstationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LoopPresetCompanion';
  items = ['Item 1', 'Item 2', 'Item s3'];
}
