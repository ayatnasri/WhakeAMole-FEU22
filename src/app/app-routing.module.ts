import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerNameComponent } from './player-name/player-name.component';
import { ResultComponent } from './result/result.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  {path:'', component: PlayerNameComponent},
  {path:'play', component: StartGameComponent},
  {path:'result/:id', component: ResultComponent},
  {path:'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
