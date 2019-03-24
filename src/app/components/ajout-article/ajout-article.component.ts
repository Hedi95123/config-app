import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/article';
import { IUpload } from '../../models/upload';
import { ArticlesService } from '../../services/articles.service';

import { AngularFireAuth } from '@angular/fire/auth';
import {Userconnect} from '../../models/profile';



@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {


  upload: IUpload;
  article: Article;

  profile: Userconnect = {
    email: '',
    password: '',
    uid: '',
   };

  constructor( public afAuth: AngularFireAuth, private firebaseService: ArticlesService, private router: Router) {

    this.article = <Article>{};
    this.upload = <IUpload>{};

    const user = localStorage.getItem('email');
    this.profile.email = user;
    console.log (user);


    this.article.uid = localStorage.getItem('uid');
    console.log ('uid: ' +  this.article.uid);
   }

  ngOnInit() {
  }


  onAddSubmit() {
    this.firebaseService.addArticle(this.article, this.upload);
    this.router.navigate(['articles']);
  }

  detectFiles(event) {
    const selectedFiles = event.target.files;
    this.upload.file = selectedFiles.item(0);
  }
}
