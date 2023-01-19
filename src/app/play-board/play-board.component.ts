import { Component } from '@angular/core';
import { Moles, State } from '../datatype';
import { LogicService } from '../logic.service';



@Component({
  selector: 'app-play-board',
  template: `
    <div class="dispalyGrid" >
      <div *ngFor="let mole of state.hol">
        <app-mole [aMole]="mole"></app-mole>
      </div>
    </div>
  `,
  styles: [ `
  .dispalyGrid{
    display: inline-grid;
    height: auto;
    grid-template-columns: auto auto auto auto auto;
  }
 `
  ]
})
export class PlayBoardComponent {
  aMole:Moles = { id:0, visible:true}; //To pass data to child component (mole component)
  state!:State;                        // Get the data from service - use status.hol[] to create ngFor loop.  
                                       // then use property binding to child (app-mole)
  constructor( private _moles: LogicService ){ 
    this.state = this._moles.state;
  }

}
