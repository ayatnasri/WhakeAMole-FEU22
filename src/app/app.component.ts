import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container text-center">
      <h3>{{ title }}</h3>
      <app-header></app-header>
      <app-play-board></app-play-board>
    </div>
   
  `,
  styles: [' .container {background:rgb(77,172,100); width:60%; font-family:cursive;}', ' h3{text-align:center; font-size:45px;}']
})
export class AppComponent {
  title:string = 'Whake A Mole Game'

}
