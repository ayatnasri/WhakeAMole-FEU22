import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Moles } from '../datatype';
import { LogicService } from '../logic.service';


@Component({
  selector: 'app-img-visible',
  template: `
  
      `,
  styles: [ `

  `
  ]
})
export class ImgVisibleComponent {
 
  @Input() aMole:Moles = {clicked :false, id:1, visible:true};
  
  moles:Moles[] = [];
 
  constructor( private _moles: LogicService ){
    this.moles= this._moles.getMole();

  }



  
  getRandomMole(){
   
  }

}
