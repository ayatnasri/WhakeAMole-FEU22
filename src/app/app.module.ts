import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { LogicService } from './logic.service';
import { MoleComponent } from './mole/mole.component';
import { PlayBoardComponent } from './play-board/play-board.component';
import { ResultComponent } from './result/result.component';
import { StartGameComponent } from './start-game/start-game.component';
import { PlayerNameComponent } from './player-name/player-name.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoleComponent,
    PlayBoardComponent,
    ResultComponent,
    StartGameComponent,
    PlayerNameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [LogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
