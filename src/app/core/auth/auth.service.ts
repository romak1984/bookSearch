import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get userName(){
    return this.userName$.asObservable();
  }

  constructor() { }

  setUserName(userName: string): void {
    this.userName$.next(userName);
  }
}
