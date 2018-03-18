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
});
