import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {

  article: Article;

  constructor(private firebaseService: ArticlesService) { }
  articles: Article[];


  ngOnInit() {
    const  articles = this.firebaseService.getArticles()
    .subscribe( lst => this.articles = lst);
  }

}
