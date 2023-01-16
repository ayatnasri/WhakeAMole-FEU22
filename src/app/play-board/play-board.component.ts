import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Moles } from '../datatype';
import { LogicService } from '../logic.service';


@Component({
  selector: 'app-play-board',
  template: `
    <div class="dispalyGrid" >
      <div *ngFor="let mole of moles" (click)="onClickSelectAMole(mole.clicked)">
        <app-mole [aMole]='mole' [visibleImg]="visibleImg"></app-mole>
      </div>
      
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
export class PlayBoardComponent implements OnInit {
  moles:Moles[] = [];
  @Input() aMole:Moles = {clicked :false, id:0, visible:true};
  

  constructor( private _moles: LogicService ){
    this.moles= this._moles.getMole();
  }
  ngOnInit(): void {
  }

  public points:number = 0 // create a variable to get more points
  @Output() moleSelected = new EventEmitter<number>(); // to send the points to parents 
  onClickSelectAMole(clicked:boolean){
    clicked = this.aMole.clicked = true;
    this.points++;                                // add points when click on the mole
    this.moleSelected.emit(this.points);          // emit this points to parents 
    
  }


  visibleImg:boolean = this.aMole.visible;

/*
   visibleImg:boolean = this.aMole.visible;
  clickedMole:boolean =this.aMole.clicked;

   randomNumber:number= 1;


  randomMole(id:number){
  setInterval(()=> {
    this.randomNumber= Math.floor(Math.random() * this.moles.length)
    console.log(this.randomNumber);
    if(this.randomNumber === this.aMole.id){
      setInterval(()=>{
        this.visibleImg = true;
        if(this.clickedMole === true){
          this.visibleImg= false;
          console.log(this.visibleImg);
        }
      },4000)
    }else {
      this.visibleImg = false;
    }
  },500);
}*/


}
