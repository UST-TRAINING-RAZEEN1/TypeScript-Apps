var Author = /** @class */ (function () {
    function Author(id, name) {
        this.id = id;
        this.name = name;
    }
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = true; // By default, a book is available
    }
    Book.prototype.checkOut = function (member) {
        var _a;
        if (this.available) {
            this.available = false;
            this.checkedOutBy = member;
            console.log("Book \"".concat(this.title, "\" checked out by ").concat(member.name, "."));
        }
        else {
            console.log("Book \"".concat(this.title, "\" is not available. Currently checked out by ").concat((_a = this.checkedOutBy) === null || _a === void 0 ? void 0 : _a.name, "."));
        }
    };
    Book.prototype.returnBook = function () {
        var _a;
        if (!this.available) {
            console.log("Book \"".concat(this.title, "\" returned by ").concat((_a = this.checkedOutBy) === null || _a === void 0 ? void 0 : _a.name, "."));
            this.available = true;
            this.checkedOutBy = undefined;
        }
        else {
            console.log("Book \"".concat(this.title, "\" was not checked out."));
        }
    };
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name) {
        this.id = id;
        this.name = name;
    }
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Library.prototype.findBookByTitle = function (title) {
        return this.books.find(function (book) { return book.title === title; });
    };
    Library.prototype.listAvailableBooks = function () {
        return this.books.filter(function (book) { return book.available; });
    };
    Library.prototype.checkOutBook = function (title, member) {
        var book = this.findBookByTitle(title);
        if (book) {
            book.checkOut(member);
        }
        else {
            console.log("Book \"".concat(title, "\" not found."));
        }
    };
    Library.prototype.returnBook = function (title) {
        var book = this.findBookByTitle(title);
        if (book) {
            book.returnBook();
        }
        else {
            console.log("Book \"".concat(title, "\" not found."));
        }
    };
    return Library;
}());
// Example usage
var author1 = new Author(1, "George Orwell");
var author2 = new Author(2, "J.K. Rowling");
var book1 = new Book(1, "1984", author1);
var book2 = new Book(2, "Harry Potter and the Sorcerer's Stone", author2);
var member1 = new Member(1, "Alice");
var member2 = new Member(2, "Bob");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addMember(member1);
library.addMember(member2);
console.log("Available Books:", library.listAvailableBooks());
library.checkOutBook("1984", member1);
console.log("Available Books after checkout:", library.listAvailableBooks());
console.log("That book after checkout", library.findBookByTitle("1984"));
library.returnBook("1984");
console.log("Available Books after return:", library.listAvailableBooks());
