import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bank, Slot, StateType } from '../../loopstation.model';
import { LoopstationService } from '../../loopstation.service';

@Component({
  selector: 'app-storage-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storage-selector.component.html',
  styleUrl: './storage-selector.component.scss',
})
export class StorageSelectorComponent {
  @Input() type: StateType = 'input';

  readonly banks: Bank[] = ['A', 'B', 'C', 'D'];
  readonly slots: Slot[] = ['A', 'B', 'C', 'D'];

  constructor(public ls: LoopstationService) {}

  readonly isActiveSide = computed(() =>
    this.type === 'input' ? this.ls.isActiveSide : !this.ls.isActiveSide,
  );

  readonly activeBank = computed(() => this.ls.getBank(this.type));
  readonly activeSlot = computed(() => this.ls.getSlot(this.type));

  onBankChange(bank: Bank): void {
    this.ls.setBank(this.type, bank);
  }

  onSlotChange(slot: Slot): void {
    this.ls.setSlot(this.type, slot);
  }
}
