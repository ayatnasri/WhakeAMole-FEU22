import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1> {{title}} </h1>
    <div class="d-flex justify-content-between m-3">
      <div class="flex-column">
        <h6>Time remaining:</h6>
        <span>{{timeStart}}</span>
      </div>
      <div class="flex-column">
        <h6>Points:</h6>
        <span>{{points}}</span>
      </div>
      <div class="flex-column">
        <button class="btn btn-danger"(click)="stratTimer()">start</button>
      </div>
    </div>
  `,
  styles: [`
    h1{
      text-align:center;
      color:rgb(220,53,69);
    }
    h6{
      font-size:20px;
    }
    span{
      font-size: 35px;
    }
    button{
      padding: 10px 40px;
      font-size:20px;
    }


    `]
})
export class HeaderComponent {
  title:string = 'Whake A Mole Game'
  timeStart:number = 60;
  interval:any;
  points:number=0

  stratTimer(){
    this.interval= setInterval(()=>{
      if(this.timeStart > 0 ){
        this.timeStart--;
      } else {
        this.timeStart = 0
      }
    },1000)
  }
  pauseTimer(){
    clearInterval(this.interval);
  }
}
