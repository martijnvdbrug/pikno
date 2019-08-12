import { Injectable } from '@angular/core';
import {Article} from './model/article';

@Injectable()
export class ArticleService {

  constructor() {}

  async get(): Promise<Article[]> {
    return [
      {
        title: 'How To Write Clean Code That Reduces Headaches',
        subtitle: 'Abstraction is evil. Code is anti-evil, and clean code is perhaps divine',
        tags: ['programming', 'engineering', 'code']
      }, {
        title: 'SOLID Principles in 10 minutes',
        subtitle: 'Understand SOLID Principles in less than a hour',
        tags: ['engineering', 'code']
      }, {
        title: 'Psychology of Code Readability',
        subtitle: 'helpful in understanding and finding better ways of writing code',
        tags: ['programming', 'engineering', 'code']
      }, {
        title: 'What Is Readable Code?',
        subtitle: 'Code creates interfaces. But code itself is also an interface',
        tags: ['programming', 'code']
      }, {
        title: 'Keep it Simple with the Strategy Design Pattern',
        subtitle: 'how to structure your classes and their relationships are what matters',
        tags: ['programming', 'engineering', 'code', 'software']
      }
    ];
  }

}
