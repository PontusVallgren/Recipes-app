import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    let authObs: Observable<AuthResponseData>;
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (!this.isLoginMode) {
      authObs = this.authService.register(email, password);
    } else {
      authObs = this.authService.login(email, password);
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
      },
      (errorMsg) => {
        console.log(errorMsg);
        this.error = errorMsg;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
