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

  it('judge should judge exactly', inject([GameService], (service: GameService) => {
    expect(service.judgeHands('グー', 'グー')).toEqual('引き分け');
    expect(service.judgeHands('グー', 'チョキ')).toEqual('あなたの勝ち！');
    expect(service.judgeHands('グー', 'パー')).toEqual('あなたの負け・・・');
    expect(service.judgeHands('チョキ', 'グー')).toEqual('あなたの負け・・・');
    expect(service.judgeHands('チョキ', 'チョキ')).toEqual('引き分け');
    expect(service.judgeHands('チョキ', 'パー')).toEqual('あなたの勝ち！');
    expect(service.judgeHands('パー', 'グー')).toEqual('あなたの勝ち！');
    expect(service.judgeHands('パー', 'チョキ')).toEqual('あなたの負け・・・');
    expect(service.judgeHands('パー', 'パー')).toEqual('引き分け');
  }));

  it ('fight should returns judgement and cpuHandType', inject([GameService], (service: GameService) => {
    console.log(service.fight('グー'));
    service.getCpuHandType = () => 'グー';
    service.fight('グー').subscribe(result => {
      expect(result['judgement']).toEqual('引き分け');
      expect(result['cpuHandType']).toEqual('グー');
    });

  }));
});

