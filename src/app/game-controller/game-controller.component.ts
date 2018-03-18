import {Component, OnInit} from '@angular/core';
import {GameComponent} from '../game/game.component';


@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  constructor(private gameComponent: GameComponent) {
  }

  ngOnInit() {
  }

  onSelect(handType: string) {
    this.gameComponent.onGameStart(handType);
  }
}
