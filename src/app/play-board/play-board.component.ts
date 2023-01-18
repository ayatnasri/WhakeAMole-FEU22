import { Component, Input, OnInit } from '@angular/core';
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
    gap:3px;
  }
 `
  ]
})
export class PlayBoardComponent implements OnInit {
  @Input() aMole:Moles = { id:0, visible:true};
  state!:State; // has data from service 

  constructor( private _moles: LogicService ){  // Get the data from service 
    this.state = this._moles.state;
  }
  ngOnInit(): void {}
}
