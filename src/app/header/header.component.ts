import { Component} from '@angular/core';
import { State } from '../datatype';
import { LogicService } from '../logic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-container">
      <div class="d-flex justify-content-between header">
        <div class="flex-column">
          <h6>Time remaining:</h6>
          <span>{{ state.timeStart }}</span>
        </div>
        <div class="flex-column">
          <h6>Points:</h6>
          <span>{{ state.points }}</span>
        </div>
        <div class="flex-column button-div">
          <button class="playBtn" *ngIf="state.timeStart == 60" (click)="onStartTimer()"> Start </button>
          <button class="resetBtn" *ngIf="state.timeStart == 0" (click)="onResetTimer()"> Play again </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header-container{
      width:80;
    }
    .header{
      height:auto;
      padding: 0 25px;
    }
    h6{
      font-size:22px;
    }
    span{
      font-size:22px;
    }
    button{
      width:170px;
      height:55px;
      font-size:22px;
      border:none;
      border-radius:20px;
    }
    .button-div{
      padding:20px;
      width:30%;
    }
    button:hover{
      background-color:rgb(20,46,27);
      color:white;
    }
    .playBtn{
      background-color:black;
      color:white;
    }
    .resetBtn{
      background-color:white;
      color:black;
    }
    `]
})
export class HeaderComponent  {
  // A variable has the data from service.
  state!:State;  

 // Dependency injection - Get the data from service 
  constructor(private _state: LogicService, private __router:Router){   
    this.state = this._state.state;
  }
  
  onStartTimer(){   // Starter the game when click the statrt button.
    this._state.startGame();
  }
  onResetTimer(){   //Reset the game when click the reset button.
    this._state.timerReset();
    this.__router.navigate(['']);
  }
}