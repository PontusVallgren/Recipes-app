import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tokenExperiationTimer: any;

  constructor(private store: Store<fromApp.AppState>) {}

  setLogoutTimer(experiationDuration: number) {
    this.tokenExperiationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, experiationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExperiationTimer) {
      clearTimeout(this.tokenExperiationTimer);
      this.tokenExperiationTimer = null;
    }
  }
}
