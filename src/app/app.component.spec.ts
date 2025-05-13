import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { AuthGoogleService } from './auth/auth-google.service';
import { AuthGoogleServiceMock } from './mocks/auth-google-service.mock';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: AuthGoogleService,
          useValue: AuthGoogleServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: {},
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'LoopPresetCompanion' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LoopPresetCompanion');
  });
});
