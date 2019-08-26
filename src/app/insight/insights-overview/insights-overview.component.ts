import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';
import {Article} from '../model/article';

@Component({
  selector: 'pn-insights-overview',
  templateUrl: './insights-overview.component.html',
  styleUrls: ['./insights-overview.component.scss']
})
export class InsightsOverviewComponent implements OnInit {

  article: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    await this.route.params.subscribe(async (params) => {
      this.article = await this.articleService.getInsightsForArticle(params.id);
    });
  }

}
