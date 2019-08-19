import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatChipsModule, MatGridListModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {ArticleService} from './article.service';
import {ArticlesOverviewComponent} from './articles-overview/articles-overview.component';
import { InsightCardComponent } from './insight-card/insight-card.component';
import { InsightsOverviewComponent } from './insights-overview/insights-overview.component';



@NgModule({
  declarations: [
    ArticlesOverviewComponent,
    InsightCardComponent,
    InsightsOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [
    ArticleService
  ],
  exports: [
    ArticlesOverviewComponent
  ],
})
export class InsightModule { }
