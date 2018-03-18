import {Component, OnInit} from '@angular/core';
import {GameComponent} from '../game/game.component';
import {HandTypes} from '../HandTypes';


@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  HandTypes: HandTypes;

  constructor(private gameComponent: GameComponent) {
  }

  ngOnInit() {
    this.HandTypes = HandTypes;
  }

  onSelect(handType: string) {
    this.gameComponent.onGameStart(handType);
  }
}
