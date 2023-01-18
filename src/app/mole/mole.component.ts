import { Component, OnInit } from '@angular/core';
import { Moles, State } from '../datatype';
import { LogicService } from '../logic.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-mole',
  template: `
    <div id="moleBox">
        {{aMole.id}}
        <ng-container *ngIf="aMole.visible; else hiddenTheImg">
          <img class="moleImg" src="/assets/Animal.jpg" width="80%" height="80%" (click)="onClickaddPoints(aMole.id)" />
        </ng-container>
        
        <ng-template #hiddenTheImg>
          <div class="hideImg"> not visible</div>
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
  @Input() aMole:Moles = { id:1, visible:true};
  state!:State;
  constructor( private _moles: LogicService){
    this.moles= this._moles.getMole();
    this.state = this._moles.state;
  }
  onClickaddPoints(id:number){
      this._moles.ClickaddPoints(this.aMole.id);  
  }
ngOnInit(): void { }
}

