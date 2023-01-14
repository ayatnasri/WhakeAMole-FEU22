import { Injectable } from '@angular/core';
import { State, Moles } from './datatype';
import { Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
// Create timer for the game  :

      state:State = {timeStart:60};
      interval:any = null;
      timerStart(){ 
        if(this.state.timeStart <= 0 || this.interval != null) return; // don't start the timer if timeStart <= 0 or if the timer running
        this.interval = setInterval(()=>{// start the timer and reduce 1 (timer -1)
            this.state.timeStart--;
        if(this.state.timeStart <= 0){    //if the timer <= 0 
          clearInterval(this.interval);   //clear interval
            this.interval = null;         // and stop 
          }
        },1000)
      }
      timerReset(){
        if (this.interval != null){       // if the timer running
          clearInterval(this.interval); 
          this.interval = null;   
        }
        this.state.timeStart = 60;
      }

// Create Mole :
      getMole():Moles[] {
        return [
          {clicked :false, id:1, visible:true},
          {clicked :false, id:2, visible:true},
          {clicked :false, id:3, visible:true},
          {clicked :false, id:4, visible:true},
          {clicked :false, id:5, visible:true},
          {clicked :false, id:6, visible:true},
          {clicked :false, id:7, visible:true},
          {clicked :false, id:8, visible:true},
          {clicked :false, id:9, visible:true},
          {clicked :false, id:10, visible:true},
          {clicked :false, id:11, visible:true},
          {clicked :false, id:12, visible:true},
          {clicked :false, id:13, visible:true},
          {clicked :false, id:14, visible:true},
          {clicked :false, id:15, visible:true},
          {clicked :false, id:16, visible:true},
          {clicked :false, id:17, visible:true},
          {clicked :false, id:18, visible:true},
          {clicked :false, id:19, visible:true},
          {clicked :false, id:20, visible:true},
          {clicked :false, id:21, visible:true},
          {clicked :false, id:22, visible:true},
          {clicked :false, id:23, visible:true},
          {clicked :false, id:24, visible:true},
          {clicked :false, id:25, visible:true}
        ]
      }



// Create Points count

    points:number = 0;
    @Output() pointsChange = new EventEmitter<number>();
    
    AddPoints(){
      console.log('clicked');
      this.points++;
      this.pointsChange.emit(this.points);
    }







  
  randomMole(){
    return [Math.floor(Math.random() * (this.getMole().length))];
   }

}
