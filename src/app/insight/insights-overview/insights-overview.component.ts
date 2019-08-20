import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Insight} from '../model/insight';

@Component({
  selector: 'pn-insights-overview',
  templateUrl: './insights-overview.component.html',
  styleUrls: ['./insights-overview.component.scss']
})
export class InsightsOverviewComponent implements OnInit {

  id: string;
  insights: Insight[];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    const {id} = await this.route.params.toPromise();
    this.id = id;
  }

}
