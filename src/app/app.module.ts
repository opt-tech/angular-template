import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import {GameService} from './game.service';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
