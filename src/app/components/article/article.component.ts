import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../services/articles.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';
import { storage } from 'firebase/app';

import { Article } from '../../models/article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: string;
  article: Article;
  imageUrl: string;

  constructor(private firebaseService: ArticlesService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getArticle(this.id).subscribe(article => {

      this.article = article;

      const path = this.article.path !== '' ?
        this.article.path :
        'listingimages/default.jpg';

      const storageRef = firebase.storage().ref();
      const spaceRef = storageRef.child(path);

      storageRef.child(path).getDownloadURL()
        .then((url) => {
          this.imageUrl = url;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

}
