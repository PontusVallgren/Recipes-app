import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApps from './store/app.reducer';
import * as AuthActions from './auth/store/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApps.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
