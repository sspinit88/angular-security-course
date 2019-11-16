import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { map } from 'rxjs/operators';


export const ANONYMOUS_USER: UserModel = {
  id: undefined,
  email: '',
};

@Injectable(
  // {providedIn: 'root'}
)
export class AuthService {

  private subject = new BehaviorSubject<UserModel>(ANONYMOUS_USER);

  user$ = this.subject.asObservable();

  isLoggerIn$: Observable<boolean> = this.user$.pipe(map((user: UserModel) => !!user.id));

  isLoggedOut$: Observable<boolean> = this.isLoggerIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(
    private _http: HttpClient,
  ) {
  }

  signUp(email: string, password: string) {

  }
}
