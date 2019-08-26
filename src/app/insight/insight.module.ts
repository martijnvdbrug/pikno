import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {ArticleService} from './article.service';
import {ArticlesOverviewComponent} from './articles-overview/articles-overview.component';
import {ArticleCardComponent} from './article-card/article-card.component';
import {InsightsOverviewComponent} from './insights-overview/insights-overview.component';
import {RouterModule} from '@angular/router';
import {HostnamePipe} from './hostname.pipe';

@NgModule({
  declarations: [
    HostnamePipe,
    ArticlesOverviewComponent,
    ArticleCardComponent,
    InsightsOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    ArticleService
  ],
  exports: [],
})
export class InsightModule {
}
