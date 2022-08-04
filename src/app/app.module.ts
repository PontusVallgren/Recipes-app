import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './auth/store/auth.effect';
import { RecipeEffects } from './recipes/store/recipe.effect';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffect, RecipeEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
