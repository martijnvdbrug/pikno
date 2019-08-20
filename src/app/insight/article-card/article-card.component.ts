import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pn-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() tags: string[];

  constructor() {}

  ngOnInit() {
  }

}
