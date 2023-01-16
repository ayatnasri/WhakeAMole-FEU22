import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import { Moles, State } from '../datatype';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-header',
  template: `
   
    <div class="d-flex justify-content-between m-3 header">
      <div class="flex-column">
        <h6>Time remaining:</h6>
        <span>{{state.timeStart}}</span>
      </div>
      <div class="flex-column">
        <h6>Points:</h6>
        <span> {{points}} </span>
      </div>
      <div class="flex-column">
        <button class="btn btn-danger" *ngIf="state.timeStart == 60"  (click)="onStartTimer()">start </button>
        <button class="btn btn-danger"  *ngIf="state.timeStart == 0"  (click)="onResetTimer()">Play again</button>
      </div>
    </div>
    
  `,
  styles: [`
    .header{
      height:auto;
    }
    h6{
      font-size:10px;
    }
    span{
      font-size: 20px;
    }
    button{
      font-size:15px;
    }
    `]
})
export class HeaderComponent implements OnInit {

  state!:State;

  @Input() points:number=0;   // binding from parents (app-component) to child to show points 

  constructor(private _state: LogicService){    // dependency injection -get the data from service 
    this.state = this._state.state;
  }
  
  onStartTimer(){   // call back from service - starter the timer and random number
    this._state.timerStart();
  }
  onResetTimer(){   // call back from service - reset the game
    this._state.timerReset();
  }

  ngOnInit(): void {}
  
  

  

}
/*
  <button class="btn btn-danger" (click)="onAddPoints()"> Add Points </button>
  AddPoints(){
    this.points++;
    this.pointsChange.emit(this.points)
  }
  @Output() pointsChange = new EventEmitter<number>();
*/