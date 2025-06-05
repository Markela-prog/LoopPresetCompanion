import { Component, computed } from '@angular/core';
import { LoopstationService } from '../../../loopstation.service';

@Component({
  selector: 'app-screen-content',
  templateUrl: './screen-content.component.html',
  styleUrl: './screen-content.component.scss',
})
export class ScreenContentComponent {
  constructor(private readonly ls: LoopstationService) {}

  readonly state = computed(() => this.ls.currentState());

  get effects(): string[] {
    const { type, value } = this.state();
    return [
      `Effect One for ${type.toUpperCase()} ${value}`,
      `Effect Two for ${type.toUpperCase()} ${value}`,
      `Effect Three for ${type.toUpperCase()} ${value}`,
      `Effect Four for ${type.toUpperCase()} ${value}`,
    ];
  }
}
