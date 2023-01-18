import { Component } from '@angular/core';
import { Moles } from './datatype';
import { LogicService } from './logic.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container text-center">
      <h3> {{title}}</h3>
      <app-header></app-header>
      <app-play-board></app-play-board>
    </div>
   
  `,
  styles: [' .container {background: lightgray; width:70%;}', ' h3{text-align:center; color:rgb(220,53,69); padding:0;}']
})
export class AppComponent {
  title:string = 'Whake A Mole Game'
  moles:Moles[] = [];

  constructor(private _moles: LogicService){
    this.moles = this._moles.getMole();
  }

}
