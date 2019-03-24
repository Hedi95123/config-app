import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {ArticlesService } from '../../services/articles.service';
import {Item} from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: Item = {
    email: '',
    password: '',
  };


  constructor(private firebaseService: ArticlesService,  private fire: AngularFireAuth , private router: Router) { }

  ngOnInit() {
  }

  myLogin() {
    this.fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
    .then(user => {
console.log(this.auth.email, this.auth.password);
localStorage.setItem('isLoggedIn', 'true');
this.router.navigate(['/articles']);


localStorage.setItem('email', this.fire.auth.currentUser.email);

this.fire.authState.subscribe(auth => {
  if (auth) {
    localStorage.setItem('uid', auth.uid);
  }
} );

this.router.navigate(['/']);
    }).catch(error => {
console.error(error);
    });
}

}
