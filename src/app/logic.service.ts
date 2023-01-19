import { Injectable } from '@angular/core';
import { State, Moles } from './datatype'; // Import types from datatype.ts.


@Injectable({
  providedIn: 'root'
})
export class LogicService {
  constructor(){
    this.state.hol = this.getMole(); // Pass data to all components.
  }
                                      
public getMole():Moles[] {  // Create a public method that contains array of 25 Moles objects.
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
    { id:25, visible:false}
  ]
};
// *************************************

// The variables which we need to create methods and attach variables in the components:
state:State = {timeStart:60 , hol:[], points:0};
interval:any = null;
randomNumber!:number;
busyMoles = new Set(); // This will contain max 3 random number to check the number in the busy stage or free. 
visibleMole:number = 0
maxVisibleMoles:number = 3
// *************************************

// All the methods : 
// 1- The main function that starts the Game , Timer and Random number:
timerStart(){ 
  if(this.state.timeStart <= 0 || this.interval != null) return; // Don't start the timer if timeStart <= 0 or if the timer is running.
  this.interval = setInterval(()=>{ // Create interval for the game.
      this.randomMole();            // Starter random mole during playing interval.
      this.state.timeStart--;       // Start the timer -1 every second.
  if(this.state.timeStart <= 0){    // Check if the timer <= 0 .
    clearInterval(this.interval);   // Clear playing interval - this will clear random method also.
      this.interval = null;         // Inital value - Stop the game.
    }
  },1000);
}

// 2- The reset button Play again - Reset the game
timerReset(){
  this.state.timeStart = 60;        // Reset the timer to initial value 
  this.state.points = 0;            // Reset the pints to initial value
  this.busyMoles.clear();           // Clear the set of busy random number
  this.visibleMole = 0;             // No mole will display 
  this.maxVisibleMoles = 3;         // There are 3 places to random moles
}

// 3- Random number will display random mole
randomMole(){
  console.log(this.visibleMole);
  if(this.visibleMole < this.maxVisibleMoles){          // Show max 3 moles at the same time
    this.randomNumber= Math.floor(Math.random() * (this.getMole().length));
    if(!this.busyMoles.has(this.randomNumber)){         // Dont repeated the number - If not 
      console.log(this.randomNumber);
      this.state.hol[this.randomNumber].visible = true; // Show the mole
      this.busyMoles.add(this.randomNumber);            // And add the number to the busy stage
      this.visibleMole++;                               // decreased possibility of showing new mole
      this.whenNotClicked(this.getMole()[this.randomNumber].id); // If the mole not clicked 
    }
  } 
}

// 4- The first Case : When the mole not Clicked :
whenNotClicked(id:number){                      
  setTimeout((id:number)=>{         // All the number will disappear by itself after 4 seconds.
    if(this.busyMoles.has(id-1)){   // Check if the id in the busy stage 
      console.log(id);
      this.state.hol[id-1].visible = false; // this id will disappear itself
      this.busyMoles.delete(id-1);  // Delete the number from busy stage.  
      this.visibleMole--;           // increased possibility of showing new mole
    }
  },4000, id);
}
   
// 5- The second Case : When click on the mole :
ClickTheMole(id:number){
  if(this.interval != null){     // check if the game is running 
    this.state.points++;         // add points when click on the mole 
    this.state.hol[id-1].visible = false;
    this.busyMoles.delete(id-1); // this means the mole is free now
    this.visibleMole--;          // increases the possibility of show a new mole
  }
}

}


  /*
        if(this.state.points < 10){
        alert('Game Over! Your score is : ' +this.state.points);
      }
      if(this.state.points > 10 && this.state.points < 25 ){
        alert('Good! Your score is : ' +this.state.points);
      }
      if(this.state.points > 25){
        alert('Very Good! Your score is : ' +this.state.points);
      }
  */