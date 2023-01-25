import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Player } from '../datatype';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-player-name',
  template: `
  <div class="name-container">
    <h4> Can you find me ? </h4>
    <h4> Enter your name, pleas! </h4>
    
    <img class="moleImg mole" src="/assets/mole2.jpg" width="20%" height="20%" />

    <form (ngSubmit)="onSubmit()" #playNow="ngForm">

      <div class="form-group">
        <label for="name">YOUR NAME</label>
        <input type="text" id="name" name="name" class="form-control" [(ngModel)]="newPlayer.name" #name="ngModel" required>
      </div>

      <button class="btn btn-dark" type="submit" [disabled]="!playNow.form.valid">Save</button>
      
    </form>
  <div>
  `,
  styles: [`
  .name-container{
    background:rgb(77,172,100);
    width:60%;
    font-family:cursive;
    margin:110px auto;
    text-align: center;
    height:auto;
    padding:20px 50px;
   }
   h4{
    font-size:40px;
    padding:10px;
   }
   form {
    width:30%;
    text-align: center;
    margin:20px auto;
   }
   .form-group{
    padding:20px;
   }
   button{
     margin:20px;
     padding:10px;
     font-size:20px;
     width:90px;
   }
  
  `
  ]
})
export class PlayerNameComponent{
  newPlayer:Player;

  constructor(private __router: Router, private __afs: AngularFirestore, private _state: LogicService){
    this.newPlayer = this._state.newPlayer;
   }
  
  onSubmit(){
    this.__afs.collection('players').add(this.newPlayer);
    this.__router.navigate(['play']);
  }

}
/*
      <button class="btn btn-secondary" (click)="onCancel()">Cancel</button>
        onCancel(){
    this.__router.navigate(['play']);
  }
*/