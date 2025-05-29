import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BankSelectorComponent } from './bank-selector/bank-selector.component';
import { SlotSelectorComponent } from './slot-selector/slot-selector.component';
import { ScreenComponent } from './screen/screen.component';

@Component({
  selector: 'app-control-panel',
  imports: [CommonModule, BankSelectorComponent, SlotSelectorComponent, ScreenComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent {
  @Input() type: 'input' | 'track' = 'input';
}
