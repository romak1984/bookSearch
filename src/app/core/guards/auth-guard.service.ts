import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): Observable<boolean>|boolean {
    return this.auth.userName.pipe(
      map((name) => {
        if(name){return true;} else { 
          this.router.navigate(['login']);
          return false;
        }
      })
    );
}
}
