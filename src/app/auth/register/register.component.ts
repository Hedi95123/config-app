import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {ArticlesService } from '../../services/articles.service';
import {Item} from '../../models/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  auth: Item = {
    email: '',
    password: '',
    uid: ''
  };


  constructor(private firebaseService: ArticlesService,  private fire: AngularFireAuth , private router: Router) { }

  ngOnInit() {
  }
  myRegister() {
    this.fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
    .then(user => {
console.log(this.auth.email, this.auth.password);
this.router.navigate(['/']);
    }).catch(error => {
console.error(error);
    });
}
}
