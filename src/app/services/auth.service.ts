import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth) { }

  getUserStatus() {
    return this.fireAuth.authState;
  }
}
