import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HandTypes} from './HandTypes';
import {Judgements} from './Judgements';

@Injectable()
export class GameService {
  constructor() {
  }

  judgeHands(yourHandType: string, cpuHandType: string): string {
    if (yourHandType === HandTypes.ROCK) {
      if (cpuHandType === HandTypes.ROCK) {
        return Judgements.DRAW;
      } else if (cpuHandType === HandTypes.SCISSORS) {
        return Judgements.YOUR_WIN;
      } else {
        return Judgements.YOUR_LOSE;
      }
    } else if (yourHandType === HandTypes.SCISSORS) {
      if (cpuHandType === HandTypes.ROCK) {
        return Judgements.YOUR_LOSE;
      } else if (cpuHandType === HandTypes.SCISSORS) {
        return Judgements.DRAW;
      } else {
        return Judgements.YOUR_WIN;
      }
    } else {
      if (cpuHandType === HandTypes.ROCK) {
        return Judgements.YOUR_WIN;
      } else if (cpuHandType === HandTypes.SCISSORS) {
        return Judgements.YOUR_LOSE;
      } else {
        return Judgements.DRAW;
      }
    }
  }

  getCpuHandType() {
    const a = Math.floor(Math.random() * 3);
    if (a === 0) {
      return HandTypes.ROCK;
    } else if (a === 1) {
      return HandTypes.SCISSORS;
    } else {
      return HandTypes.PAPER;
    }
  }

  fight(yourHandType: string): Observable<object> {
    const cpuHandType = this.getCpuHandType();
    return of({
      judgement: this.judgeHands(yourHandType, cpuHandType),
      cpuHandType: cpuHandType,
    });
  }
}
