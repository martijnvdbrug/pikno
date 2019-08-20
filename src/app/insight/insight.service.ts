import { Injectable } from '@angular/core';
import {Article} from './model/article';
import {Insight} from './model/insight';

@Injectable()
export class InsightService {

  constructor() {}

  async getForArticle(articleId: string): Promise<Insight> {
    return undefined;
  }

}
