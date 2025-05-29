import { signal, computed } from '@angular/core';

export const inputBank = signal<'A' | 'B' | 'C' | 'D'>('A');
export const inputSlot = signal<'A' | 'B' | 'C' | 'D'>('A');

export const trackBank = signal<'A' | 'B' | 'C' | 'D'>('A');
export const trackSlot = signal<'A' | 'B' | 'C' | 'D'>('A');

export const isInputActive = signal<boolean>(true);

export const currentState = computed(() => {
  return isInputActive()
    ? { type: 'input', value: `${inputBank()}${inputSlot()}` }
    : { type: 'track', value: `${trackBank()}${trackSlot()}` };
});
