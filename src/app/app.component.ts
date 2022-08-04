import { Component, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApps from './store/app.reducer';
import * as AuthActions from './auth/store/auth.action';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApps.AppState>,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AuthActions.AutoLogin());
    }
  }
}
