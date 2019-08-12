import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pn-insight-card',
  templateUrl: './insight-card.component.html',
  styleUrls: ['./insight-card.component.scss']
})
export class InsightCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() tags: string[];

  constructor() {}

  ngOnInit() {
  }

}
