import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ScreenComponent } from './screen/screen.component';
import { StorageSelectorComponent } from './storage-selector/storage-selector.component';

@Component({
  selector: 'app-control-panel',
  imports: [CommonModule, ScreenComponent, StorageSelectorComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent {
  @Input() type: 'input' | 'track' = 'input';
}
