import {Insight} from './insight';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  source: string;
  insights?: Insight[];
}
