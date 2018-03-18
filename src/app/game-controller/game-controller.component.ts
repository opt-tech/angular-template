import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';


@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

  onSelect(handType: string) {
    const result = this.gameService.fight(handType);
    console.log(result);
  }
}
