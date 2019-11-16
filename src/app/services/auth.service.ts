import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable(
  // {providedIn: 'root'}
)
export class AuthService {

  user$: Observable<UserModel>;

  constructor(
    private _http: HttpClient,
  ) {
  }

  signUp(email: string, password: string) {

  }
}
