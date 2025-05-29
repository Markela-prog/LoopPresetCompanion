import { Component, computed } from '@angular/core';
import { currentState } from '../../../loopstation.state';

@Component({
  selector: 'app-screen-content',
  imports: [],
  templateUrl: './screen-content.component.html',
  styleUrl: './screen-content.component.scss',
})
export class ScreenContentComponent {
  readonly state = computed(() => currentState());

  get effects() {
    const type = this.state().type;
    const value = this.state().value;
    return [
      `Effect One for ${type.toUpperCase()} ${value}`,
      `Effect Two for ${type.toUpperCase()} ${value}`,
      `Effect Three for ${type.toUpperCase()} ${value}`,
      `Effect Four for ${type.toUpperCase()} ${value}`,
    ];
  }
}
