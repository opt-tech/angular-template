import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  judgement: string;
  yourHandType: string;
  cpuHandType: string;
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.judgement = 'not start';
    this.yourHandType = '???';
    this.cpuHandType = '???';
  }

  onGameStart(yourHandType: string) {
    this.yourHandType = yourHandType;
    this.gameService.fight(yourHandType).subscribe( result => {
      this.cpuHandType = result.cpuHandType;
      this.judgement = result.judgement;
    });
  }
}
