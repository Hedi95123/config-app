import { Injectable } from '@angular/core';

import { AngularFireObject, AngularFireList } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators' ;


import { Article } from '../models/article';
import { IUpload } from '../models/upload';


import { AngularFireAuth } from '@angular/fire/auth';
import { of as ObservableOf } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  email = this.fire.authState.pipe ( map ( authState => {
    if (!authState) {
      return null;
    } else {
      return authState.email;
    }
      }),
      );
      isAdmin = ObservableOf (true);
  articles: AngularFireList<any[]>;
  folder: string;
  getItemData: any;


  constructor(private db: AngularFireDatabase , private fire: AngularFireAuth) {
    this.folder = 'articleimages';
    this.articles = this.db.list('articles') as AngularFireList<any[]>;
  }
  getArticles(): Observable<Article[]> {
    return this.db.list('articles').snapshotChanges()
      .pipe (map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() }));
      }));

    // It returns records without Id
    // return this.db.object('listings').valueChanges();
  }


  getArticle(id: any): Observable<Article> {
    return this.db.object('/articles/' + id).snapshotChanges()
      .pipe (map(action => {
        return { key: action.key, ...action.payload.val() };
      }));

    // It returns a record without Id
    // return this.db.object('/listings/' + id).valueChanges();
  }

  addArticle(article: Article, upload: IUpload) {

    let path = '';

    // Upload file
    if (upload.file !== undefined) {
       path = `${this.folder}/${upload.file.name}`;
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(path).put(upload.file);
    }

    // Add Details record to firebase DB
    article.path = path;
    article.image = upload.file !== undefined ?  upload.file.name : '';
    this.db.list('articles').push(article);
  }

  updateArticle(id: any, article: any) {
    return this.articles.update(id, article);
    // Or
    // return this.db.object('/listings/' + id).update(listing);
  }

  deleteArticle(id: string) {
    return this.articles.remove(id);
    // Or
    // return this.db.object('/listings/' + id).remove();
  }
}
