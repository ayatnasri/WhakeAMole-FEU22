import { Injectable } from '@angular/core';
import { State, Moles } from './datatype';


@Injectable({
  providedIn: 'root'
})
export class LogicService {
  constructor(){
    this.state.hol = this.getMole(); // to be used in all component
  }
// 1- Create Mole array of objects:
public getMole():Moles[] {
  return [
    { id:1, visible:false},
    { id:2, visible:false},
    { id:3, visible:false},
    { id:4, visible:false},
    { id:5, visible:false},
    { id:6, visible:false},
    { id:7, visible:false},
    { id:8, visible:false},
    { id:9, visible:false},
    { id:10, visible:false},
    { id:11, visible:false},
    { id:12, visible:false},
    { id:13, visible:false},
    { id:14, visible:false},
    { id:15, visible:false},
    { id:16, visible:false},
    { id:17, visible:false},
    { id:18, visible:false},
    { id:19, visible:false},
    { id:20, visible:false},
    { id:21, visible:false},
    { id:22, visible:false},
    { id:23, visible:false},
    { id:24, visible:false},
    { id:25, visible:false},
  
  ]
};


// 2- Create timer for the game  :

      state:State = {timeStart:60 , hol:[], points:0};
      interval:any = null;
      randomNumber!:number;
      busyMoles = new Set();
      visibleMole:number = 0
      maxVisibleMoles:number = 3

      timerStart(){ 
        if(this.state.timeStart <= 0 || this.interval != null) return; // don't start the timer if timeStart <= 0 or if the timer running
        this.interval = setInterval(()=>{ 
            this.randomMole();            // call method - starter random mole 
            this.state.timeStart--;       // start the timer and reduce 1 (timer - 1)
        if(this.state.timeStart <= 0){    //if the timer <= 0 
          clearInterval(this.interval);   //clear interval - this will clear random method also
            this.interval = null;         // go to inital value 
          
          }
        },1000)
      }

      timerReset(){
        if (this.interval != null) {       // if the timer running
          clearInterval(this.interval);   // and we click on reset button this will reset the value of interval to null
          this.interval = null; 
        }
        this.state.timeStart = 60;        // and the timerStart will be 60 again
        this.state.points = 0;
        this.busyMoles.clear();
      
      }

      randomMole(){
        if(this.visibleMole < this.maxVisibleMoles){  // show max 3 moles at the same time
          this.randomNumber= Math.floor(Math.random() * (this.getMole().length)) + 1;
          if(!this.busyMoles.has(this.randomNumber)){   // check the number - this should not repeated - if not
            this.state.hol[this.randomNumber].visible = true; // so show the mole
            this.busyMoles.add(this.randomNumber);  // and add the number to the busy stage
            this.visibleMole++; // add one to visibleMole - decreased possibility of showing new mole
            console.log(this.randomNumber);
            this.whenNotClicked(this.getMole()[this.randomNumber].id);
          }
        }

      }
      
      whenNotClicked(id:number){
        if(this.busyMoles.has(id-1)){
        this.busyMoles.forEach(()=>{
          setTimeout(()=>{
            this.state.hol[id-1].visible = false;
            this.busyMoles.delete(id-1);
            this.visibleMole--;
          },4000)
        })
       
        
        }
      }
   

      ClickaddPoints(id:number){
        id = this.state.hol[this.randomNumber].id-1;
        this.state.points++;  // add points when click on the mole 
        this.state.hol[id].visible = false;
        this.busyMoles.delete(id); // this means the mole is free now
        this.visibleMole--; // increases the possibility of show a new mole
      }
    }




        /*

  if(this.state.hol[this.randomNumber].visible){
              setTimeout(()=>{
                this.state.hol[this.randomNumber].visible = false;
                this.busyMoles.delete(this.randomNumber);
                this.visibleMole--;
              },4000);
            }



 ClickaddPoints(id:number){
          this.state.points++;  // add points when click on the mole 
          this.state.hol[id].clicked = true; // clicked now
          this.state.hol[id].visible = false;
          this.busyMoles.delete(id);
          this.visibleMole--;// this means the mole is free now
       
        setTimeout(()=>{
          if(!this.state.hol[id].clicked){
            this.state.hol[id].visible = false;
            this.visibleMole--;
            this.busyMoles.delete(id);
          }
        },4000);
        }
       

        whenNotClicked(id:number){
          if(!this.state.hol[id].clicked){
            setTimeout(()=>{
              this.state.hol[id].visible = false;
              this.state.hol[id].clicked = false;
              this.busyMoles.delete(id);
              this.visibleMole--;
            },4000);
          }
        } */