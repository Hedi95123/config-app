import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../services/articles.service';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  constructor(private firebaseService: ArticlesService) { }

  ngOnInit() {
  }

}
