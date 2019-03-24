import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators' ;


@Injectable({
  providedIn: 'root'
})
export class UserguardService {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getUserStatus()
    .pipe ( map(e => {
        if (e != null && !e.isAnonymous) {
          return true;
        }
        this.router.navigate(['/']);
        return false;
      }));
  }
}
