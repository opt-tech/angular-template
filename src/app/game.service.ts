import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class GameService {
  constructor() {
  }

  judgeHands(yourHandType: string, cpuHandType: string): string {
    if (yourHandType === 'グー') {
      if (cpuHandType === 'グー') {
        return 'draw';
      } else if (cpuHandType === 'チョキ') {
        return 'win';
      } else {
        return 'lose';
      }
    } else if (yourHandType === 'チョキ') {
      if (cpuHandType === 'グー') {
        return 'lose';
      } else if (cpuHandType === 'チョキ') {
        return 'draw';
      } else {
        return 'win';
      }
    } else {
      if (cpuHandType === 'グー') {
        return 'win';
      } else if (cpuHandType === 'チョキ') {
        return 'lose';
      } else {
        return 'draw';
      }
    }
  }

  getCpuHandType() {
    const a = Math.floor(Math.random() * 3);
    if (a === 0) {
      return 'グー';
    } else if (a === 1) {
      return 'チョキ';
    } else if (a === 2) {
      return 'パー';
    }
  }

  fight(yourHandType: string): Observable<string> {
    const cpuHandType = this.getCpuHandType();
    return of({
      judgement: this.judgeHands(yourHandType, cpuHandType),
      cpuHandType: cpuHandType,
    });
  }
}
