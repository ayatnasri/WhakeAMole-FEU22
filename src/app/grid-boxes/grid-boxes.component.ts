import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-boxes',
  template: `
  <div class="container text-center">
    <div class="row">
      <div class="col" (change)="addPoints()"><button (click)="changePoints()">1</button></div>
      <div class="col"><button>2</button></div>
      <div class="col"><button>3</button></div>
      <div class="col"><button>4</button></div>
      <div class="col"><button>5</button></div>
    </div>
    <div class="row">
      <div class="col"><button>6</button></div>
      <div class="col"><button>7</button></div>
      <div class="col"><button>8</button></div>
      <div class="col"><button>9</button></div>
      <div class="col"><button>10</button></div>
    </div>
    <div class="row">
      <div class="col"><button>11</button></div>
      <div class="col"><button>12</button></div>
      <div class="col"><button>13</button></div>
      <div class="col"><button>14</button></div>
      <div class="col"><button>15</button></div>
    </div>
    <div class="row">
      <div class="col"><button>16</button></div>
      <div class="col"><button>17</button></div>
      <div class="col"><button>18</button></div>
      <div class="col"><button>19</button></div>
      <div class="col"><button>20</button></div>
    </div>
    <div class="row">
      <div class="col"><button>21</button></div>
      <div class="col"><button>22</button></div>
      <div class="col"><button>23</button></div>
      <div class="col"><button>24</button></div>
      <div class="col"><button>25</button></div>
    </div> 
  </div>
  `,
  styles: [`
    .col{
      border: 1px solid black;
      width: 100px;
      height:100px;
      background: lightred;
    }
   
  `
  ]
})
export class GridBoxesComponent {
   @Input() points:number=0;

  changePoints(){
   
 
  }
  addPoints(){

  }
}
/*<div class="row">
      <div class="col"><button (click)="changePoints()">1</button></div>
      <div class="col"><button>2</button></div>
      <div class="col"><button>3</button></div>
      <div class="col"><button>4</button></div>
      <div class="col"><button>5</button></div>
    </div>
    <div class="row">
      <div class="col"><button>6</button></div>
      <div class="col"><button>7</button></div>
      <div class="col"><button>8</button></div>
      <div class="col"><button>9</button></div>
      <div class="col"><button>10</button></div>
    </div>
    <div class="row">
      <div class="col"><button>11</button></div>
      <div class="col"><button>12</button></div>
      <div class="col"><button>13</button></div>
      <div class="col"><button>14</button></div>
      <div class="col"><button>15</button></div>
    </div>
    <div class="row">
      <div class="col"><button>16</button></div>
      <div class="col"><button>17</button></div>
      <div class="col"><button>18</button></div>
      <div class="col"><button>19</button></div>
      <div class="col"><button>20</button></div>
    </div>
    <div class="row">
      <div class="col"><button>21</button></div>
      <div class="col"><button>22</button></div>
      <div class="col"><button>23</button></div>
      <div class="col"><button>24</button></div>
      <div class="col"><button>25</button></div>
    </div> */
