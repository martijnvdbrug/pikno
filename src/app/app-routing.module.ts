import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsightsOverviewComponent} from './insight/insights-overview/insights-overview.component';


const routes: Routes = [
  { path: '',
    component: InsightsOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
