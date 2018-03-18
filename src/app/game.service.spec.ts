import {TestBed, inject} from '@angular/core/testing';

import {GameService} from './game.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});

describe('judgeHands', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });
  it('should be exact judge', inject([GameService], (service: GameService) => {
    expect(service.judgeHands('グー', 'グー')).toEqual('draw');
    expect(service.judgeHands('グー', 'チョキ')).toEqual('win');
    expect(service.judgeHands('グー', 'パー')).toEqual('lose');
    expect(service.judgeHands('チョキ', 'グー')).toEqual('lose');
    expect(service.judgeHands('チョキ', 'チョキ')).toEqual('draw');
    expect(service.judgeHands('チョキ', 'パー')).toEqual('win');
    expect(service.judgeHands('パー', 'グー')).toEqual('win');
    expect(service.judgeHands('パー', 'チョキ')).toEqual('lose');
    expect(service.judgeHands('パー', 'パー')).toEqual('draw');
  }));
});
