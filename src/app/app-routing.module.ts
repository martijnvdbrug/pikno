import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesOverviewComponent} from './insight/articles-overview/articles-overview.component';
import {InsightsOverviewComponent} from './insight/insights-overview/insights-overview.component';


const routes: Routes = [
  {
    path: '',
    component: ArticlesOverviewComponent
  }, {
    path: 'insights/:id',
    component: InsightsOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
