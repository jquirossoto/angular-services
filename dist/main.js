(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+5Uy":
/*!********************************************!*\
  !*** ./src/app/models/bookTrackerError.ts ***!
  \********************************************/
/*! exports provided: BookTrackerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookTrackerError", function() { return BookTrackerError; });
class BookTrackerError {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jquirossoto/Documents/development/projects/training/angular/angular-services/src/main.ts */"zUnb");


/***/ }),

/***/ "2y6B":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-book/add-book.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form #addBookForm=\"ngForm\" (ngSubmit)=\"saveBook(addBookForm.value)\" class=\"form-horizontal\">\n      <fieldset>\n        <legend>Add New Book</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" name=\"title\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" name=\"author\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" name=\"publicationYear\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "6hI5":
/*!************************************************!*\
  !*** ./src/app/add-book/add-book.component.ts ***!
  \************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-book.component.html */ "2y6B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AddBookComponent = class AddBookComponent {
    constructor() { }
    ngOnInit() { }
    saveBook(formValues) {
        let newBook = formValues;
        newBook.bookID = 0;
        console.log(newBook);
        console.warn('Save new book not yet implemented.');
    }
};
AddBookComponent.ctorParameters = () => [];
AddBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-book',
        template: _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AddBookComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AVqD":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: allReaders, allBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allReaders", function() { return allReaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allBooks", function() { return allBooks; });
const allReaders = [
    { readerID: 1, name: 'Marie', weeklyReadingGoal: 400, totalMinutesRead: 5600 },
    { readerID: 2, name: 'Daniel', weeklyReadingGoal: 210, totalMinutesRead: 3000 },
    { readerID: 3, name: 'Lanier', weeklyReadingGoal: 140, totalMinutesRead: 600 }
];
const allBooks = [
    { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953 },
    { bookID: 2, title: 'Green Eggs and Ham', author: 'Dr. Seuss', publicationYear: 1960 },
    { bookID: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', publicationYear: 1963 },
    { bookID: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937 },
    { bookID: 5, title: 'Curious George', author: 'H. A. Rey', publicationYear: 1941 },
    { bookID: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', publicationYear: 1865 },
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "C9lS":
/*!**************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.ts ***!
  \**************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-book.component.html */ "c+tP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/data.service */ "QVKM");
/* harmony import */ var app_core_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/logger.service */ "fSl4");






let EditBookComponent = class EditBookComponent {
    constructor(route, _dataService, _loggerService) {
        this.route = route;
        this._dataService = _dataService;
        this._loggerService = _loggerService;
    }
    ngOnInit() {
        let bookID = parseInt(this.route.snapshot.params['id']);
        this.selectedBook = this._dataService.getBookById(bookID);
    }
    setMostPopular() {
        this._dataService.setMostPopularBook(this.selectedBook);
        this._loggerService.log(`New most popular books: ${this.selectedBook.title}`);
    }
    saveChanges() {
        console.warn('Save changes to book not yet implemented.');
    }
};
EditBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: app_core_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
EditBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-book',
        template: _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], EditBookComponent);



/***/ }),

/***/ "DLzb":
/*!***********************************************!*\
  !*** ./src/app/core/error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/bookTrackerError */ "+5Uy");



let ErrorHandlerService = class ErrorHandlerService {
    constructor() { }
    handleError(error) {
        let customError = new app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_2__["BookTrackerError"]();
        customError.errorNumber = 200;
        customError.message = error.message;
        customError.friendlyMessage = 'An error ocurred. Please try again.';
        console.error(customError);
    }
};
ErrorHandlerService.ctorParameters = () => [];
ErrorHandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorHandlerService);



/***/ }),

/***/ "EX//":
/*!***************************************!*\
  !*** ./src/app/core/badge.service.ts ***!
  \***************************************/
/*! exports provided: BadgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeService", function() { return BadgeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let BadgeService = class BadgeService {
    constructor() { }
    getReaderBadge(minutesRead) {
        let badge;
        if (minutesRead > 5000) {
            badge = 'Book Worm';
        }
        else if (minutesRead > 2500) {
            badge = 'Page Turner';
        }
        else {
            badge = 'Getting Started';
        }
        return badge;
    }
};
BadgeService.ctorParameters = () => [];
BadgeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BadgeService);



/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">All Books</h3>\n        </div>\n        <div class=\"panel-body\">\n        <li *ngFor='let book of allBooks'>\n          <i>{{book.title}}</i>\n          <a [routerLink]=\"['/editbook', book.bookID]\"> Edit </a>\n          <a (click)=\"deleteBook(book.bookID)\">Delete</a>\n        </li>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">All Readers</h3>\n        </div>\n        <div class=\"panel-body\">\n        <li *ngFor='let reader of allReaders'>\n          {{reader.name}}\n          <a [routerLink]=\"['/editreader', reader.readerID]\">Edit</a>\n          <a (click)=\"deleteReader(reader.readerID)\"> Delete </a>\n        </li>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Most Popular Book</h3>\n        </div>\n        <div class=\"panel-body\">\n          <i>{{mostPopularBook.title}}</i> by {{mostPopularBook.author}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "MIyZ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-reader/add-reader.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form #addReaderForm=\"ngForm\" (ngSubmit)=\"saveReader(addReaderForm.value)\" class=\"form-horizontal\">\n      <fieldset>\n        <legend>Add Reader</legend>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" name=\"name\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" name=\"weeklyReadingGoal\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" name=\"totalMinutesRead\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "QVKM":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/data */ "AVqD");
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/bookTrackerError */ "+5Uy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger.service */ "fSl4");








let DataService = class DataService {
    constructor(loggerService, http) {
        this.loggerService = loggerService;
        this.http = http;
        this.mostPopularBook = app_data__WEBPACK_IMPORTED_MODULE_3__["allBooks"][0];
    }
    setMostPopularBook(book) {
        this.mostPopularBook = book;
    }
    getAuthorRecommendation(readerId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (readerId > 0) {
                    resolve('Dr. Seuss');
                }
                else {
                    reject('Invalid readerId');
                }
            }, 2000);
        });
    }
    getAllReaders() {
        return this.http.get('/api/readers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleHttpError));
    }
    getReaderById(readerId) {
        return app_data__WEBPACK_IMPORTED_MODULE_3__["allReaders"].find(reader => reader.readerID === readerId);
    }
    getAllBooks() {
        return app_data__WEBPACK_IMPORTED_MODULE_3__["allBooks"];
    }
    getBookById(bookId) {
        return app_data__WEBPACK_IMPORTED_MODULE_3__["allBooks"].find(book => book.bookID === bookId);
    }
    handleHttpError(error) {
        let dataError = new app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_4__["BookTrackerError"]();
        dataError.errorNumber = 100;
        dataError.message = error.statusText;
        dataError.friendlyMessage = "An error ocurred retrieved the data.";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(dataError);
    }
};
DataService.ctorParameters = () => [
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/logger.service */ "fSl4");
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/data.service */ "QVKM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






let DashboardComponent = class DashboardComponent {
    constructor(_loggerService, _dataService, _title) {
        this._loggerService = _loggerService;
        this._dataService = _dataService;
        this._title = _title;
    }
    ngOnInit() {
        this.allBooks = this._dataService.getAllBooks();
        this._dataService.getAllReaders().subscribe((readers) => this.allReaders = readers, (error) => console.log(`Error while getting readers: ${error.friendlyMessage}`), () => this._loggerService.log('All done getting readers.'));
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
        this._title.setTitle(`Book Tracker ${_angular_core__WEBPACK_IMPORTED_MODULE_2__["VERSION"].full}`);
        this._loggerService.log('Done with dashboard initialization');
        throw new Error('Ugly technical error');
    }
    getAuthorRecommendationAsync(readerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let author = yield this._dataService.getAuthorRecommendation(readerId);
            this._loggerService.log(`Recommended author: ${author}`);
        });
    }
    deleteBook(bookID) {
        console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
    }
    deleteReader(readerID) {
        console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: app_core_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], DashboardComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Book Tracker</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/addbook']\">Add Book<span class=\"sr-only\">(current)</span></a></li>\n                <li><a [routerLink]=\"['/addreader']\">Add Reader</a></li>\n            </ul>\n        </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n</nav>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "W+pk":
/*!****************************************************!*\
  !*** ./src/app/add-reader/add-reader.component.ts ***!
  \****************************************************/
/*! exports provided: AddReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReaderComponent", function() { return AddReaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_reader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-reader.component.html */ "MIyZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AddReaderComponent = class AddReaderComponent {
    constructor() { }
    ngOnInit() { }
    saveReader(formValues) {
        let newReader = formValues;
        newReader.readerID = 0;
        console.log(newReader);
        console.warn('Save new reader not yet implemented.');
    }
};
AddReaderComponent.ctorParameters = () => [];
AddReaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-reader',
        template: _raw_loader_add_reader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AddReaderComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-book/add-book.component */ "6hI5");
/* harmony import */ var _add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-reader/add-reader.component */ "W+pk");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-book/edit-book.component */ "C9lS");
/* harmony import */ var _edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-reader/edit-reader.component */ "dkrA");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/error-handler.service */ "DLzb");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_5__["AddBookComponent"],
            _edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_11__["EditReaderComponent"],
            _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_10__["EditBookComponent"],
            _add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_6__["AddReaderComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            // PlainLoggerService,
            // {provide: LoggerService, useExisting: PlainLoggerService},
            // { provide: LoggerService, useValue: {
            //   log: (message: string) => console.log(`MESSAGE: ${message}`),
            //   error: (message: string) => console.error(`PROBLEM: ${message}`)
            // } },
            // {provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService]},
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _core_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlerService"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "Zpjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-reader/edit-reader.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Edit Reader</legend>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" [(ngModel)]=\"selectedReader.name\" name=\"name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" [(ngModel)]=\"selectedReader.weeklyReadingGoal\" name=\"weeklyReaddingGoal\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" [(ngModel)]=\"selectedReader.totalMinutesRead\" name=\"totalMinutesRead\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Current badge</label>\n          <div class=\"col-lg-8\">\n            {{ currentBadge }}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-3\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "c+tP":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-book/edit-book.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Edit Book</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"selectedBook.title\" name=\"title\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" [(ngModel)]=\"selectedBook.author\" name=\"author\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" [(ngModel)]=\"selectedBook.publicationYear\" name=\"publicationYear\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"setMostPopular()\">Set As Most Popular</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "dkrA":
/*!******************************************************!*\
  !*** ./src/app/edit-reader/edit-reader.component.ts ***!
  \******************************************************/
/*! exports provided: EditReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReaderComponent", function() { return EditReaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_reader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-reader.component.html */ "Zpjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_badge_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/badge.service */ "EX//");
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/data.service */ "QVKM");






let EditReaderComponent = class EditReaderComponent {
    constructor(route, _dataService, _badgeService) {
        this.route = route;
        this._dataService = _dataService;
        this._badgeService = _badgeService;
    }
    ngOnInit() {
        let readerID = parseInt(this.route.snapshot.params['id']);
        this.selectedReader = this._dataService.getReaderById(readerID);
        this.currentBadge = this._badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
    }
    saveChanges() {
        console.warn('Save reader not yet implemented.');
    }
};
EditReaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: app_core_badge_service__WEBPACK_IMPORTED_MODULE_4__["BadgeService"] }
];
EditReaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-reader',
        template: _raw_loader_edit_reader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [app_core_badge_service__WEBPACK_IMPORTED_MODULE_4__["BadgeService"]]
    })
], EditReaderComponent);



/***/ }),

/***/ "fSl4":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let LoggerService = class LoggerService {
    constructor() { }
    log(message) {
        const timeString = new Date().toLocaleTimeString();
        console.log(`${message} (${timeString})`);
    }
    error(message) {
        const timeString = new Date().toLocaleTimeString();
        console.log(`ERROR: ${message} (${timeString})`);
    }
};
LoggerService.ctorParameters = () => [];
LoggerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoggerService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/add-book/add-book.component */ "6hI5");
/* harmony import */ var app_add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/add-reader/add-reader.component */ "W+pk");
/* harmony import */ var app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/dashboard.component */ "QX6l");
/* harmony import */ var app_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/edit-book/edit-book.component */ "C9lS");
/* harmony import */ var app_edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/edit-reader/edit-reader.component */ "dkrA");








const routes = [
    { path: 'dashboard', component: app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'addbook', component: app_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__["AddBookComponent"] },
    { path: 'addreader', component: app_add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_4__["AddReaderComponent"] },
    { path: 'editreader/:id', component: app_edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_7__["EditReaderComponent"] },
    { path: 'editbook/:id', component: app_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_6__["EditBookComponent"] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map