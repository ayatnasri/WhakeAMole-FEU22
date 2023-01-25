import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router} from '@angular/router';
import { Player, State } from '../datatype';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-start-game',
  template: `
    <div class="container text-center">
      <h3>{{ title }}</h3>
      <div class="alert" role="alert" *ngIf="state.timeStart == 0">
        <a (click)="goToResult()" >Show me my result</a>
      </div>
      <app-header></app-header>
      <app-play-board></app-play-board>
    </div>
  `,
  styles: [ `
  .container {
    background:rgb(77,172,100);
    width:60%;
    font-family:cursive;
  } 
  h3{
    text-align:center;
    font-size:45px;
  }
  .alert{
    width:40%;
    margin: 0 auto;
    height:60px;
    color:white;
    font-size:30px;
  }
  ` 
  ]
})
export class StartGameComponent{
  title:string = 'Whake A Mole Game';
  newPlayer:Player;
  state!:State;


  constructor(
    private __router: Router,
    private __afs: AngularFirestore,
    private _state: LogicService
    ){
    this.newPlayer = this._state.newPlayer;
    this.state = this._state.state;
  }

  goToResult(){
    this.__router.navigate(['result']);
  }
}
