import { Component, computed, Input } from '@angular/core';
import { Slot, StateType } from '../../loopsation.types';
import { inputSlot, isInputActive, trackSlot } from '../../loopstation.state';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slot-selector',
  imports: [MatButtonToggleModule, CommonModule],
  templateUrl: './slot-selector.component.html',
  styleUrl: './slot-selector.component.scss',
})
export class SlotSelectorComponent {
  readonly slots: Slot[] = ['A', 'B', 'C', 'D'];
  @Input() type: StateType = 'input';

  get selectedSlot() {
    return this.type === 'input' ? inputSlot : trackSlot;
  }

  onChange(value: Slot) {
    if (!this.slots.includes(value)) return;

    this.selectedSlot.set(value);

    isInputActive.set(this.type === 'input');
  }

  get activeValue() {
    return computed(() => this.selectedSlot());
  }

  get isActiveSide() {
    return computed(() => (this.type === 'input' ? isInputActive() : !isInputActive()));
  }
}
