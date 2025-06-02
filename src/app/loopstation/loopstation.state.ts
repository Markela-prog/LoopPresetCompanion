import { signal, computed } from '@angular/core';
import type { Bank, Slot, StateType, LoopState } from './loopsation.types';

export const isInputActive = signal(true);

export const inputBank = signal<Bank>('A');
export const trackBank = signal<Bank>('A');

const inputSlots = signal<Record<Bank, Slot>>({ A: 'A', B: 'A', C: 'A', D: 'A' });
const trackSlots = signal<Record<Bank, Slot>>({ A: 'A', B: 'A', C: 'A', D: 'A' });

export const inputSlot = computed(() => inputSlots()[inputBank()]);
export const trackSlot = computed(() => trackSlots()[trackBank()]);

export const currentState = computed<LoopState>(() => {
  return isInputActive()
    ? { type: 'input', value: `${inputBank()}${inputSlot()}` }
    : { type: 'track', value: `${trackBank()}${trackSlot()}` };
});

export function setBank(type: StateType, bank: Bank): void {
  if (type === 'input') {
    inputBank.set(bank);
    isInputActive.set(true);
  } else {
    trackBank.set(bank);
    isInputActive.set(false);
  }
}

export function setSlot(type: StateType, slot: Slot): void {
  if (type === 'input') {
    const bank = inputBank();
    inputSlots.set({ ...inputSlots(), [bank]: slot });
    isInputActive.set(true);
  } else {
    const bank = trackBank();
    trackSlots.set({ ...trackSlots(), [bank]: slot });
    isInputActive.set(false);
  }
}
