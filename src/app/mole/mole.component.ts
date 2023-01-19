import { Component } from '@angular/core';
import { Moles, State } from '../datatype';
import { LogicService } from '../logic.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-mole',
  template: `
    <div id="moleBox">

        <ng-container *ngIf="aMole.visible; else hiddenTheImg">
          <img class="moleImg mole" src="/assets/mole2.jpg" width="80%" height="80%" (click)="onClick(aMole.id)" />
        </ng-container>
        
        <ng-template #hiddenTheImg>
          <div class="hideImg">
            <img class="moleImg" src="/assets/background.jpg" width="80%" height="80%" />
          </div>
        </ng-template>

    </div>
  
  `,
  styles: [ `
    #moleBox{
      width:150px;
      height:130px;
    };
    .hideImg{
      background-color:rgb(177,172,100);
      height:100%;
    };
   .mole{
    padding:10px 0;
   }
  `
  ]
})
export class MoleComponent{
   // Variables which have the data from service.
  @Input() aMole:Moles = { id:1, visible:true}; // Data binding - from parents (play-board component) to child
  state!:State;
  constructor( private _moles: LogicService){
    this.state = this._moles.state;
  }

  onClick(id:number){ // When click on the mole - pass the mole id to service. 
      this._moles.ClickTheMole(this.aMole.id);  
  }
}

