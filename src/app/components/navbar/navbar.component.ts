import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  private isLoggedIn: Boolean = false;
  private email: string;

  constructor( public afAuth: AngularFireAuth, public router: Router, private authservice: AuthService ) {
    this.user = this.authservice.getUserStatus();


    const status = localStorage.getItem ('isLoggedIn');
    console.log (status);

    if (status === 'true') {
     this.isLoggedIn = true;
    } else {
     this.isLoggedIn = false;

    }
  }

  ngOnInit() {
  }


  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);

  }

}
