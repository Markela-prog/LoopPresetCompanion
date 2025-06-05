export type Bank = 'A' | 'B' | 'C' | 'D';
export type Slot = 'A' | 'B' | 'C' | 'D';
export type StateType = 'input' | 'track';

export interface LoopState {
  type: StateType;
  value: `${Bank}${Slot}`;
}
