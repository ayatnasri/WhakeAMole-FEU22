import { Component } from '@angular/core';
import { Moles } from '../datatype';
import { HeaderComponent } from '../header/header.component';
import { LogicService } from '../logic.service';


@Component({
  selector: 'app-play-board',
  template: `
    <app-header ></app-header>

    <div class="dispalyGrid" *ngFor="let mole of moles" >
        <app-mole [aMole]='mole' (pointsChange)="onChangePoints($event)"></app-mole>
    </div>
  `,
  styles: [ `
  .dispalyGrid{
    display: inline-grid;
    height: auto;
    grid-template-columns: auto auto auto auto auto;
    gap:2px;
  }
 `
  ]
})
export class PlayBoardComponent {
  moles:Moles[] = [];

  constructor( private _moles: LogicService ){
    this.moles= this._moles.getMole();

  }

  onChangePoints(points:number){
      alert('cliked så + '+ points++);
  }

  getRandomMole(){
   
  }
}
/*

 [class.active]="this.moles.moleNumber"
 grid-template-columns: 20% 20% 20% 20% 20%;
 grid-template-row: auto auto auto auto auto ;
 .col{
    border: 1px solid black;
    width: 100px;
    height:100px;
    background: lightred;
  }
*/