import { Injectable } from '@angular/core';
import {Article} from './model/article';
import {mockArticles} from './articles.mock';

@Injectable()
export class ArticleService {

  articles: Article[] = mockArticles;

  async getAll(): Promise<Article[]> {
    return this.articles;
  }

  async getInsightsForArticle(id: string): Promise<Article> {
    return this.articles.find(a => a.id === id);
  }

}
