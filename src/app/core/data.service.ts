import { Injectable } from '@angular/core';
import { allBooks, allReaders } from 'app/data';
import { Book } from 'app/models/book';
import { Reader } from 'app/models/reader';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mostPopularBook: Book = allBooks[0];

  constructor() { }

  setMostPopularBook(book: Book): void {
    this.mostPopularBook = book;
  }

  getAllReaders(): Reader[] {
    return allReaders;
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

}
