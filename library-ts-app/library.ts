class Author {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class Book {
    id: number;
    title: string;
    author: Author;
    available: boolean;
    checkedOutBy?: Member;

    constructor(id: number, title: string, author: Author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = true; // By default, a book is available
    }

    checkOut(member: Member): void {
        if (this.available) {
            this.available = false;
            this.checkedOutBy = member;
            console.log(`Book "${this.title}" checked out by ${member.name}.`);
        } else {
            console.log(`Book "${this.title}" is not available. Currently checked out by ${this.checkedOutBy?.name}.`);
        }
    }

    returnBook(): void {
        if (!this.available) {
            console.log(`Book "${this.title}" returned by ${this.checkedOutBy?.name}.`);
            this.available = true;
            this.checkedOutBy = undefined;
        } else {
            console.log(`Book "${this.title}" was not checked out.`);
        }
    }
}

class Member {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    findBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }

    listAvailableBooks(): Book[] {
        return this.books.filter(book => book.available);
    }

    checkOutBook(title: string, member: Member): void {
        const book = this.findBookByTitle(title);
        if (book) {
            book.checkOut(member);
        } else {
            console.log(`Book "${title}" not found.`);
        }
    }

    returnBook(title: string): void {
        const book = this.findBookByTitle(title);
        if (book) {
            book.returnBook();
        } else {
            console.log(`Book "${title}" not found.`);
        }
    }
}

// Example usage
const author1 = new Author(1, "George Orwell");
const author2 = new Author(2, "J.K. Rowling");

const book1 = new Book(1, "1984", author1);
const book2 = new Book(2, "Harry Potter and the Sorcerer's Stone", author2);

const member1 = new Member(1, "Alice");
const member2 = new Member(2, "Bob");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addMember(member1);
library.addMember(member2);

console.log("Available Books:", library.listAvailableBooks());

library.checkOutBook("1984", member1);
console.log("Available Books after checkout:", library.listAvailableBooks());
console.log("That book after checkout",library.findBookByTitle("1984"));

library.returnBook("1984");
console.log("Available Books after return:", library.listAvailableBooks());
