import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  result: string;
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.result = 'not start';
  }

  onGameStart(yourHandType: string) {
    this.gameService.fight(yourHandType).subscribe(result => this.result = result);
  }

}
