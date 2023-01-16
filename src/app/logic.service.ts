import { Injectable } from '@angular/core';
import { State, Moles } from './datatype';
import { Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
// 1- Create Mole :
public getMole():Moles[] {
  return [
    {clicked :false, id:1, visible:false},
    {clicked :false, id:2, visible:false},
    {clicked :false, id:3, visible:false},
    {clicked :false, id:4, visible:false},
    {clicked :false, id:5, visible:false},
    {clicked :false, id:6, visible:true},
    {clicked :false, id:7, visible:true},
    {clicked :false, id:8, visible:true},
    {clicked :false, id:9, visible:false},
    {clicked :false, id:10, visible:true},
    {clicked :false, id:11, visible:true},
    {clicked :false, id:12, visible:false},
    {clicked :false, id:13, visible:true},
    {clicked :false, id:14, visible:true},
    {clicked :false, id:15, visible:false},
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
};


// 2- Create timer for the game  :

      state:State = {timeStart:60};
      interval:any = null;
      randomNumber:number = 0;
      //moleID:number = 1;

      timerStart(){ 
        if(this.state.timeStart <= 0 || this.interval != null) return; // don't start the timer if timeStart <= 0 or if the timer running
        this.interval = setInterval(()=>{ 
            this.state.timeStart--;       // start the timer and reduce 1 (timer - 1)
        if(this.state.timeStart <= 0){    //if the timer <= 0 
          clearInterval(this.interval);   //clear interval
            this.interval = null;         // and stop 
          }
          //this.randomMole()
        },1000)
      }
      timerReset(){
        if (this.interval != null){       // if the timer running
          clearInterval(this.interval); 
          this.interval = null; 
            
        }
        this.state.timeStart = 60;
      }

  
      randomMole(id:number){
        setInterval(()=> {
          this.randomNumber= Math.floor(Math.random() * (this.getMole().length + 1));
          console.log(this.randomNumber);
        },500);
       }

       

  




// Create Points count




}
