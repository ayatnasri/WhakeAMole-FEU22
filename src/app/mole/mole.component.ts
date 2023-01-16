import { Component, OnInit } from '@angular/core';
import { Moles } from '../datatype';
import { LogicService } from '../logic.service';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mole',
  template: `
    <div id="moleBox">
        {{aMole.id}}  
        <ng-container *ngIf="visibleImg === true; else hiddenTheImg">
          <img class="moleImg" src="/assets/Animal.jpg" width="80%" height="80%" (click)="onClickDispalyMole(false)" />
        </ng-container>
        
        <ng-template #hiddenTheImg>
          <div class="hideImg"  (click)="onClickDispalyMole(true)"> not visible</div>
        </ng-template>

    </div>
  
  `,
  styles: [ `
    #moleBox{
      width:160px;
      height:140px;
      border: 1px solid black;
      background-color:white;
      margin-bottom: 2px;
    };
    .hideImg{
      background-color:rgb(119,119,119);
      height:80%;
    };
   

  `
  ]
})
export class MoleComponent implements OnInit{
  moles:Moles[]= [];
  @Input() aMole:Moles = {clicked :false, id:1, visible:true};
  
  @Input() visibleImg:boolean = false;
  @Input() moleId:number = this.aMole.id;
  isClicked:boolean = false;

  
  constructor( private _moles: LogicService){
    this.moles= this._moles.getMole();
  }
  
ngOnInit(): void {
 // 
}
  

  clickedMole:boolean =this.aMole.clicked;
  @Input() randomNumber!:number;

  @Output() onRandomMole(){
    this._moles.randomMole(this.moleId);
          if(this.randomNumber === this.moleId){
              setInterval(()=>{
                this.visibleImg =  true;
                if(this.clickedMole === true){
                  this.visibleImg = false;
                }
              },4000);
              this.visibleImg= false;
          }else{
            console.log(this.randomNumber);
          }
     };



     onClickDispalyMole(visible:boolean){
      this.visibleImg = visible;
      if(this.isClicked === true){
        visible = false;
      }else{
        setInterval(()=> {
          visible = true;
        },4000);
        visible = false;
      }
    }

    }



  


     /*
  randomMole(id:number){
    setInterval(()=> {
      this.randomNumber= Math.floor(Math.random() * this.moles.length + 1)
      console.log(this.randomNumber);
      if(this.randomNumber === id){
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
  }

     */

 

/* sista 15-1-2023
 <img class="moleImg" src="/assets/Animal.jpg" width="80%" height="80%" (click)="onClickAddPoints(true)" />  //html

  visible= this.aMole.visible;   //variable

  onClickAddPoints(visibleImg:boolean){   
    this.aMole.visible=visibleImg;
    console.log('click');
    this.points++;
    this.pointsChange.emit(this.points);

  }




  randomMole(id:number){
    setInterval(()=> {
      this.randomNumber= Math.floor(Math.random() * this.moles.length + 1)
      console.log(this.randomNumber);
      if(this.randomNumber === id){
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
  }

*/