import { Component } from '@angular/core';
import { Moles } from '../datatype';
import { LogicService } from '../logic.service';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mole',
  template: `
  {{points}}
    <div id="moleBox"    >
        {{aMole.id}} 
      <img class="moleImg" src="/assets/Animal.jpg" (click)="onClickAddPoints()" />
    </div>
  
  `,
  styles: [ `
    #moleBox{
      width:160px;
      height:140px;
      border: 1px solid black;
      background-color:white;
    };
    .moleImg {
      width:70px;
    }

  `
  ]
})
export class MoleComponent {
  moles:Moles[]= [];
  @Input() aMole:Moles = { clicked:true, id:1, visible:true};
  //points:number = 0;
  @Input() points:number = 0;
  @Output() pointsChange = new EventEmitter<number>();

  constructor( private _moles: LogicService){
    this.moles= this._moles.getMole();
  }

  public onClickAddPoints(){
    console.log('click');
    this.points++;
    this.pointsChange.emit(this.points);
  }


  //(click)="onClickMole()"
  //onClickMole(){
   // console.log(this.aMole.id);
  //}




// to add points when click the mole 
/*

  @Input() points:number = 0;
  //@Output() pointsChange = new EventEmitter<number>();

  onClickAddPoints(){
    this._moles.AddPoints();
   // if(this.aMole.clicked === true){
   //   this.aMole.visible
   // }
  }
  */

}
