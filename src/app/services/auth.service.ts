import { tap, shareReplay, map, filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

export const ANONYMOUS_USER: User = {
  id: undefined,
  email: ''
};


@Injectable()
export class AuthService {

  private subject = new BehaviorSubject<User>(undefined);

  user$: Observable<User> = this.subject
    .asObservable()
    .pipe(
      // tap(user => console.log('File: auth.service.ts, Line - 21, user:', user)),
      filter(user => !!user), // фильтруем данные, передаем только тогда, когда данные пользователя есть
    );

  isLoggedIn$: Observable<boolean> = this.user$
    .pipe(
      // tap(user => console.log('File: auth.service.ts, Line - 27, user.id:', user.id)),
      map(user => !!user.id),
    );

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(
    private http: HttpClient
  ) {

    // делаем запрос на получение данных пользователя
    http.get<User>('/api/user')
      .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER));

  }

  signUp(email: string, password: string) {

    return this.http.post<User>('/api/signup', { email, password }).pipe(
      shareReplay(),
      tap(user => this.subject.next(user)));

  }

  logOut(): Observable<any> {
    return this.http.post('/api/logout', null)
      .pipe(
        shareReplay(), // для избежания повторной отправки на стороне клиента
        tap(() => this.subject.next(ANONYMOUS_USER)),
      );
  }

  login(email, password): Observable<any> {
    return this.http.post('/api/login', { email, password })
      .pipe(
        shareReplay(),
        tap(user => this.subject.next(user)),
      );
  }

}
