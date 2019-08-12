import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../model/article';

@Component({
  selector: 'pn-articles-overview',
  templateUrl: './articles-overview.component.html',
  styleUrls: ['./articles-overview.component.scss']
})
export class ArticlesOverviewComponent implements OnInit {

  articles: Article[];

  constructor(
    private articleService: ArticleService
  ) { }

  async ngOnInit(): Promise<void> {
    this.articles = await this.articleService.get();
  }

  isOdd(i: number): boolean {
    return i % 2 === 0;
  }

}
