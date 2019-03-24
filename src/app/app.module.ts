import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AjoutArticleComponent } from './components/ajout-article/ajout-article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UtilisateurComponent } from './auth/utilisateur/utilisateur.component';



import { ArticlesService } from './services/articles.service';
import { AuthService } from './services/auth.service';
import { UserguardService } from './services/userguard.service';
import { ListesComponent } from './listes/listes.component';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'ajout-article', component: AjoutArticleComponent   },
  { path: 'edit-article/:id', component: EditArticleComponent  },
  { path: 'article/:id', component: ArticleComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'utilisateur', component: UtilisateurComponent },

  { path: 'listes', component: ListesComponent },
  { path: 'details/:id', component: DetailsComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    EditArticleComponent,
    AjoutArticleComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UtilisateurComponent,
    ListesComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ArticlesService, AuthService , UserguardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
