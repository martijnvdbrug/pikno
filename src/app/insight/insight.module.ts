import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatChipsModule, MatGridListModule, MatToolbarModule} from '@angular/material';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import { InsightsOverviewComponent } from './insights-overview/insights-overview.component';
import { InsightCardComponent } from './insight-card/insight-card.component';



@NgModule({
  declarations: [InsightsOverviewComponent, InsightCardComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule
  ],
  exports: [
    InsightsOverviewComponent
  ],
})
export class InsightModule { }
