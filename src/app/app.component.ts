import { Component } from '@angular/core';
import { LogicService } from './logic.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container text-center">
      <app-play-board></app-play-board>
    </div>
  `,
  styles: [' .container {background: lightgray; width:70%;}']
})
export class AppComponent {
  title = 'Whack-A-Mole-Game';
}
