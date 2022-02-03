import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TheWalletComponent } from './the-wallet.component';

describe('TheWalletComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TheWalletComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TheWalletComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'the-wallet'`, () => {
    const fixture = TestBed.createComponent(TheWalletComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('the-wallet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TheWalletComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('the-wallet app is running!');
  });
});
