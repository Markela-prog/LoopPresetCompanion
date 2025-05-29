import { Component, computed, Input } from '@angular/core';
import { inputBank, isInputActive, trackBank } from '../../loopstation.state';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Bank, StateType } from '../../loopsation.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-selector',
  imports: [MatButtonToggleModule, CommonModule],
  templateUrl: './bank-selector.component.html',
  styleUrl: './bank-selector.component.scss',
})
export class BankSelectorComponent {
  readonly banks: Bank[] = ['A', 'B', 'C', 'D'];
  @Input() type: StateType = 'input';

  get selectedBank() {
    return this.type === 'input' ? inputBank : trackBank;
  }

  onChange(value: Bank) {
    if (!this.banks.includes(value)) return;

    this.selectedBank.set(value);

    // Switch control to the side being interacted with
    isInputActive.set(this.type === 'input');
  }

  get activeValue() {
    return computed(() => this.selectedBank());
  }

  get isActiveSide() {
    return computed(() => (this.type === 'input' ? isInputActive() : !isInputActive()));
  }
}
