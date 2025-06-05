import { Injectable, computed, signal } from '@angular/core';
import type { Bank, Slot, StateType, LoopState } from './loopstation.model';

@Injectable({ providedIn: 'root' })
export class LoopstationService {
  private isInputActive = signal(true);

  private inputBank = signal<Bank>('A');
  private trackBank = signal<Bank>('A');

  private inputSlots = signal<Record<Bank, Slot>>({ A: 'A', B: 'A', C: 'A', D: 'A' });
  private trackSlots = signal<Record<Bank, Slot>>({ A: 'A', B: 'A', C: 'A', D: 'A' });

  readonly activeBank = computed(() =>
    this.isInputActive() ? this.inputBank() : this.trackBank(),
  );

  readonly activeSlot = computed(() =>
    this.isInputActive()
      ? this.inputSlots()[this.inputBank()]
      : this.trackSlots()[this.trackBank()],
  );

  readonly currentState = computed<LoopState>(() => ({
    type: this.isInputActive() ? 'input' : 'track',
    value: `${this.activeBank()}${this.activeSlot()}`,
  }));

  get isActiveSide(): boolean {
    return this.isInputActive();
  }

  getBank(type: StateType): Bank {
    return type === 'input' ? this.inputBank() : this.trackBank();
  }

  getSlot(type: StateType): Slot {
    const bank = this.getBank(type);
    return type === 'input' ? this.inputSlots()[bank] : this.trackSlots()[bank];
  }

  setBank(type: StateType, bank: Bank): void {
    if (type === 'input') {
      this.inputBank.set(bank);
      this.isInputActive.set(true);
    } else {
      this.trackBank.set(bank);
      this.isInputActive.set(false);
    }
  }

  setSlot(type: StateType, slot: Slot): void {
    const currentBank = this.getBank(type);
    if (type === 'input') {
      this.inputSlots.set({ ...this.inputSlots(), [currentBank]: slot });
      this.isInputActive.set(true);
    } else {
      this.trackSlots.set({ ...this.trackSlots(), [currentBank]: slot });
      this.isInputActive.set(false);
    }
  }
}
