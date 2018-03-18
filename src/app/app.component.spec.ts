import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameComponent} from './game/game.component';
import {GameControllerComponent} from './game-controller/game-controller.component';
import { GameService } from './game.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameComponent,
        GameControllerComponent,
      ],
      providers: [GameService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'じゃんけんゲーム'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('じゃんけんゲーム');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('じゃんけんゲーム');
  }));
});
