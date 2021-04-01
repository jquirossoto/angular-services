import { Component, OnInit, VERSION, } from '@angular/core';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';
import { BooktrackerPage } from '../../../e2e/app.po';
import { BookTrackerError } from 'app/models/bookTrackerError';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private _loggerService: LoggerService, private _dataService: DataService, private _title: Title) { }

  ngOnInit() {
    this.allBooks = this._dataService.getAllBooks();
    this._dataService.getAllReaders().subscribe(
      (readers: any) => this.allReaders = (readers as Reader[]),
      (error: BookTrackerError) => console.log(`Error while getting readers: ${error.friendlyMessage}`),
      () => this._loggerService.log('All done getting readers.')
    );
    this.mostPopularBook = this._dataService.mostPopularBook;
    // this._dataService.getAuthorRecommendation(1).then((result) => {
    //   this._loggerService.log(`Recommended author: ${result}`);
    // }, (error) => {
    //   this._loggerService.error(`Error with getting recommended author: ${error}`);
    // }).catch((error) => {
    //   this._loggerService.error(`Error with getting recommender author: ${error}`);
    // })
    this.getAuthorRecommendationAsync(1)
      .catch((error) => {
        this._loggerService.error(`Error with getting recommended author: ${error}`);
      });
    this._title.setTitle(`Book Tracker ${VERSION.full}`);
    this._loggerService.log('Done with dashboard initialization');
    throw new Error('Ugly technical error');
  }

  private async getAuthorRecommendationAsync(readerId: number): Promise<void> {
    let author:string = await this._dataService.getAuthorRecommendation(readerId);
    this._loggerService.log(`Recommended author: ${author}`);
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
