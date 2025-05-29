import { Component } from '@angular/core';
import { currentState } from '../../../loopstation.state';

@Component({
  selector: 'app-screen-header',
  imports: [],
  templateUrl: './screen-header.component.html',
  styleUrl: './screen-header.component.scss',
})
export class ScreenHeaderComponent {
  readonly state = currentState;
}
