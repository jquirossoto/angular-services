import { Injectable } from '@angular/core';

@Injectable()
export class BadgeService {

  constructor() { }

  getReaderBadge(minutesRead: number): string {
    let badge;
    if(minutesRead > 5000) {
      badge = 'Book Worm';
    } else if (minutesRead > 2500) {
      badge = 'Page Turner';
    } else {
      badge = 'Getting Started';
    }
    return badge;
  }
}
