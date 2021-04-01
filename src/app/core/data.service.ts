import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allBooks, allReaders } from 'app/data';
import { Book } from 'app/models/book';
import { BookTrackerError } from 'app/models/bookTrackerError';
import { Reader } from 'app/models/reader';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mostPopularBook: Book = allBooks[0];

  constructor(private loggerService: LoggerService, private http: HttpClient) { }

  setMostPopularBook(book: Book): void {
    this.mostPopularBook = book;
  }

  getAuthorRecommendation(readerId: number): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (readerId > 0) {
          resolve('Dr. Seuss');
        } else {
          reject('Invalid readerId');
        }
      }, 2000);
    })
  }

  getAllReaders(): Observable<Reader[] | BookTrackerError> {
    return this.http.get<Reader[]>('/api/readers')
      .pipe(
        catchError(this.handleHttpError)
      );
  }

  getReaderById(readerId: number): Reader {
    return allReaders.find(reader =>  reader.readerID === readerId);
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getBookById(bookId: number): Book {
    return allBooks.find(book => book.bookID === bookId);
  }

  private handleHttpError(error: HttpErrorResponse): Observable<BookTrackerError> {
    let dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error ocurred retrieved the data.";
    return throwError(dataError);
  }

}
