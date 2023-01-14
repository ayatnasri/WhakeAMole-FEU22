import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import { State } from '../datatype';
import { LogicService } from '../logic.service';
import { MoleComponent } from '../mole/mole.component';

@Component({
  selector: 'app-header',
  template: `
    <h3> {{title}} </h3>
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
        <button class="btn btn-danger" *ngIf="state.timeStart == 60" (click)="onStartTimer()">start </button>
        <button class="btn btn-danger"  *ngIf="state.timeStart == 0"  (click)="onResetTimer()">Play again</button>
      </div>
    </div>
    
  `,
  styles: [`
    .header{
      height:auto;
    }
    h3{
      text-align:center;
      color:rgb(220,53,69);
      padding:0;
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
  title:string = 'Whake A Mole Game'
  state!:State;
  public points:number = 0;

  constructor(private _state: LogicService){
    this.state = this._state.state;
  
    

  }
  
  onStartTimer(){   // call back from service - Click Handel
    this._state.timerStart();
  }
  onResetTimer(){   // call back from service - Click Handel
    this._state.timerReset();
  }

  // Points :


 // onAddPoints(){
   // this._state.AddPoints();
 // }

  ngOnInit(): void {
    
  }
  
  

  

}
/*
  <button class="btn btn-danger" (click)="onAddPoints()"> Add Points </button>
  AddPoints(){
    this.points++;
    this.pointsChange.emit(this.points)
  }
  @Output() pointsChange = new EventEmitter<number>();
*/