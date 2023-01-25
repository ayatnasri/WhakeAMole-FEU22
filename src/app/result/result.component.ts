import { Component ,OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Player, State } from '../datatype';
import { LogicService } from '../logic.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  template: `
  <div class="container">
  <h3>Your RESULT</h3>
    <table class="table table-bordered">
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        <tr *ngFor="let player of players | async" >
          <td>{{player.data.name}}</td>
          <td>{{player.data.points}}</td>
        </tr>
    </table>
    <button (click)="closeResult()"> Close </button>
  <div>

  `,
  styles: [`
  .container{
    background:rgb(77,172,100);
    width:60%;
    font-family:cursive;
    margin:110px auto;
    text-align: center;
    height:auto;
    padding:20px 50px;
  }
  `
  ]
})
export class ResultComponent implements OnInit{
  playerLista: AngularFirestoreCollection<Player>;
  players: any; // this have observable
  state!:State;
  newPlayer!:Player;


  constructor(
    private __afs:AngularFirestore,
    private __router:Router,
    private _state: LogicService
    ){
    this.state = this._state.state;
  }
  ngOnInit(): void { // Get the data from observable - Firebase data 
    this.playerLista = this.__afs.collection('players');
    this.players = this.playerLista.snapshotChanges().pipe(  
      map(actions => {
        return actions.map ( a => {
          const data = a.payload.doc.data() as Player; //Extract the Player - the content of the Document 
          const id = a.payload.doc.id; // Extract id för this Document 
          return {id, data};
        })
      })
    );
  }

  closeResult(){
        this.__router.navigate(['']);
  }

}
