import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesOverviewComponent} from './insight/articles-overview/articles-overview.component';


const routes: Routes = [
  { path: '',
    component: ArticlesOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
