import { Component, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bank, Slot, StateType } from '../../loopsation.types';
import {
  inputBank,
  trackBank,
  inputSlot,
  trackSlot,
  isInputActive,
  setBank,
  setSlot,
} from '../../loopstation.state';

@Component({
  selector: 'app-storage-selector',
  imports: [CommonModule],
  templateUrl: './storage-selector.component.html',
  styleUrl: './storage-selector.component.scss',
})
export class StorageSelectorComponent {
  @Input() type: StateType = 'input';

  readonly banks: Bank[] = ['A', 'B', 'C', 'D'];
  readonly slots: Slot[] = ['A', 'B', 'C', 'D'];

  readonly isActiveSide = computed(() =>
    this.type === 'input' ? isInputActive() : !isInputActive(),
  );
  readonly activeBank = computed(() => (this.type === 'input' ? inputBank() : trackBank()));

  readonly activeSlot = computed(() => (this.type === 'input' ? inputSlot() : trackSlot()));

  onBankChange(bank: Bank): void {
    if (!this.banks.includes(bank)) return;
    setBank(this.type, bank);
  }

  onSlotChange(slot: Slot): void {
    if (!this.slots.includes(slot)) return;
    setSlot(this.type, slot);
  }
}
