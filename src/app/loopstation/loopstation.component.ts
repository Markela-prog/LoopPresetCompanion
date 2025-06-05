import { Component } from '@angular/core';
import { TracksComponent } from './tracks/tracks.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@Component({
  selector: 'app-loopstation',
  imports: [TracksComponent, ControlPanelComponent],
  templateUrl: './loopstation.component.html',
  styleUrl: './loopstation.component.scss',
})
export class LoopstationComponent {}
