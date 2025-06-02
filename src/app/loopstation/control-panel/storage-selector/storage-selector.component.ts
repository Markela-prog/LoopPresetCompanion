import { Component, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Bank, Slot, StateType } from '../../loopsation.types';
import { inputBank, inputSlot, trackBank, trackSlot, isInputActive } from '../../loopstation.state';

@Component({
  selector: 'app-storage-selector',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule],
  templateUrl: './storage-selector.component.html',
  styleUrl: './storage-selector.component.scss',
})
export class StorageSelectorComponent {
  @Input() type: StateType = 'input';

  banks: Bank[] = ['A', 'B', 'C', 'D'];
  slots: Slot[] = ['A', 'B', 'C', 'D'];

  get selectedBank() {
    return this.type === 'input' ? inputBank : trackBank;
  }

  get selectedSlot() {
    return this.type === 'input' ? inputSlot : trackSlot;
  }

  get isActiveSide() {
    return computed(() => (this.type === 'input' ? isInputActive() : !isInputActive()));
  }

  onBankChange(value: Bank) {
    if (!this.banks.includes(value)) return;
    this.selectedBank.set(value);
    isInputActive.set(this.type === 'input');
  }

  onSlotChange(value: Slot) {
    if (!this.slots.includes(value)) return;
    this.selectedSlot.set(value);
    isInputActive.set(this.type === 'input');
  }

  get activeBank() {
    return computed(() => this.selectedBank());
  }

  get activeSlot() {
    return computed(() => this.selectedSlot());
  }
}
