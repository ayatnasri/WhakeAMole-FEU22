import { Component, Input } from '@angular/core';
import { Moles } from './datatype';
import { LogicService } from './logic.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container text-center">
      <h3> {{title}}</h3>
      <app-header [points]="addpoints"></app-header>
      <app-play-board (moleSelected)="moleSelectedNow($event)"></app-play-board>
    </div>
   
  `,
  styles: [' .container {background: lightgray; width:70%;}', ' h3{text-align:center; color:rgb(220,53,69); padding:0;}']
})
export class AppComponent {
  title:string = 'Whake A Mole Game'
  moles:Moles[] = [];

  addpoints!:number; // 1- create a variable for points - use property pinding

  constructor(private _moles: LogicService){
    this.moles = this._moles.getMole();
  }

  moleSelectedNow(points:number){   // when emit the points call this method
    console.log(points);
    this.addpoints = points;
  }


}
