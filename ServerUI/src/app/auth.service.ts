import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public guard = new BehaviorSubject(false);

  constructor() { }

  isLoggedIn() {
    if(sessionStorage.getItem('loggedIn')=="1"){
      this.guard.next(true);
      return true
    }
    else{
      this.guard.next(false);
      return false
    }
  }

}