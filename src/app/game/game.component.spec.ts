import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {GameControllerComponent} from '../game-controller/game-controller.component';
import {GameService} from '../game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent, GameControllerComponent],
      providers: [GameService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have parameters', () => {
    expect(component.judgement).toEqual('あなたが選択中・・・');
    expect(component.cpuHandType).toEqual('???');
    expect(component.yourHandType).toEqual('???');
  });

  it('should be changed', () => {
    const gameService = new GameService();
    gameService.getCpuHandType = () => 'グー';
    component = new GameComponent(gameService);
    component.onGameStart('グー');

    expect(component.yourHandType).toEqual('グー');
    expect(component.cpuHandType).toEqual('グー');
    expect(component.judgement).toEqual('引き分け');
  });
});
