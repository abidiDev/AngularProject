import { Component, OnInit } from '@angular/core';
import { Article } from '../core/model/article.model';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  listeArticles:Array<Article>=[new Article("Le championnat du monde","Le championnat du monde de cette année est ","Med Taher","12/12/2005","sport"),new Article("Les nouveau parents","Les nouveaux parents ","Ahmed Said","11/112018","Education"),new Article("Comment ecrire un cv","pour decrocher un entretien ","Marie Elsa","02/04/2017","Travail"),new Article("Le championnat du monde","Le championnat du monde de cette année est ","Med Taher","12/12/2005","sport")];
  nbrArticle=this.listeArticles.length;
titre="Les articles du jour";

  constructor() { }

  ngOnInit(): void {
    console.log(this.listeArticles)
  }

}
