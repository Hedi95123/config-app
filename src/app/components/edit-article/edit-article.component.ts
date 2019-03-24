import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../services/articles.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article;
  id: any;

  constructor(private firebaseService: ArticlesService, private router: Router,
    private route: ActivatedRoute) {
    this.article = <Article>{};

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getArticle(this.id)
      .subscribe(article => this.article = article);
  }
  onEditSubmit() {
    this.firebaseService.updateArticle(this.id, this.article).then(() => {
      this.router.navigate(['articles']);
    });
  }
}
