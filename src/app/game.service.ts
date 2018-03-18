import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { HandTypes } from './HandTypes';

@Injectable()
export class GameService {
  constructor() {
  }

  judgeHands(yourHandType: string, cpuHandType: string): string {
    if (yourHandType === HandTypes.ROCK) {
      if (cpuHandType === HandTypes.ROCK) {
        return 'draw';
      } else if (cpuHandType === HandTypes.SCISSORS) {
        return 'win';
      } else {
        return 'lose';
      }
    } else if (yourHandType === HandTypes.SCISSORS) {
      if (cpuHandType === HandTypes.ROCK) {
        return 'lose';
      } else if (cpuHandType === HandTypes.SCISSORS) {
        return 'draw';
      } else {
        return 'win';
      }
    } else {
      if (cpuHandType === HandTypes.ROCK) {
        return 'win';
      } else if (cpuHandType === HandTypes.SCISSORS) {
        return 'lose';
      } else {
        return 'draw';
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
