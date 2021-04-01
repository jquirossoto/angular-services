import { ErrorHandler, Injectable } from '@angular/core';
import { BookTrackerError } from 'app/models/bookTrackerError';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    let customError = new BookTrackerError();
    customError.errorNumber = 200;
    customError.message = (<Error>error).message;
    customError.friendlyMessage = 'An error ocurred. Please try again.'
    console.error(customError);
  }
}
