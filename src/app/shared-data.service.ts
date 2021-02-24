import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedDataService {
  latestNews = new Subject<number>();

  constructor() { }

}