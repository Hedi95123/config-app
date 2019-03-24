import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  myUid: any;
  article: Article;

  constructor(private firebaseService: ArticlesService) {
    this.myUid = localStorage.getItem('uid');
   }
  articles: Article[];

  ngOnInit() {
    const  articles = this.firebaseService.getArticles()
    .subscribe( lst => this.articles = lst);
  }

}
