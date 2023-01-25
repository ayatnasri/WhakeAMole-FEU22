import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerNameComponent } from './player-name/player-name.component';
import { ResultComponent } from './result/result.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  {path:'', component: PlayerNameComponent}, //  Enter your name 
  {path:'play', component: StartGameComponent}, // Start the game 
  {path:'result', component: ResultComponent} // the result 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
