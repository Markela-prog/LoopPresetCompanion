import { Component } from '@angular/core';
import { LoopstationService } from '../../../loopstation.service';

@Component({
  selector: 'app-screen-header',
  templateUrl: './screen-header.component.html',
  styleUrl: './screen-header.component.scss',
  standalone: true,
})
export class ScreenHeaderComponent {
  constructor(public ls: LoopstationService) {}
}
