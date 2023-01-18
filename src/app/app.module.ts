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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoleComponent,
    PlayBoardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [LogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
