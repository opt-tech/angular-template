import {Injectable} from '@angular/core';

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
    return 'グー';
  }

  fight(yourHandType: string): string {
    const cpuHandType = this.getCpuHandType();
    return this.judgeHands(yourHandType, cpuHandType);
  }
}
