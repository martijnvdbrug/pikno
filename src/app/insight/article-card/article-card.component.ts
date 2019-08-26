import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../model/article';

@Component({
  selector: 'pn-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {

  @Input() article: Article;

}
