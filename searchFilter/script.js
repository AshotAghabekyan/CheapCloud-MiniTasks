
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    // More books...
];


class FilterByAuthor {
    #books;
    constructor(books) {
        this.#books = books;
    }

    find(authorName) {
        let matchedBooks = [];
        this.#books.map((book) => {
            if (book.author.toLowerCase().startsWith(authorName.toLowerCase())) {
                matchedBooks.push(book);
            }   
        })
        return matchedBooks;
    }
}


class FilterByTitle {
    #books;
    constructor(books) {
        this.#books = books;
    }

    find(bookTitle) {
        let matchedBooks = [];
        this.#books.map((book) => {
            if (book.title.toLowerCase().startsWith(bookTitle.toLowerCase())) {
                matchedBooks.push(book);
            }
        })
        return matchedBooks;
    }
}



class Display {
    #contentDiv

    constructor(contentDiv) {
        this.#contentDiv = contentDiv;
    }

    highlightMatch(text, searchTerm) {
        if (!searchTerm || searchTerm.trim() === "") {
            return text;
        }

        const regex = new RegExp(searchTerm, 'ig');
        return text.replace(regex, match => `<span style="color: red;">${match}</span>`);
    }


    show(books, searchTerm) {
        if (books.length === 0) {
            this.#contentDiv.innerHTML = "Books not found";
            return;
        }

        this.#contentDiv.innerHTML = "";
        for (let i = 0; i < books.length; ++i) {
            let bookDiv = document.createElement("div");

            let highlightedTitle = this.highlightMatch(books[i].title, searchTerm);
            let highlightedAuthor = this.highlightMatch(books[i].author, searchTerm);

            bookDiv.innerHTML = `
                <h2>${highlightedTitle}</h2>
                <p>Author: ${highlightedAuthor}</p>
                <p>Publishing year: ${books[i].year}</p>
                <p>ID: ${books[i].id}</p>
            `;

            bookDiv.className = "book";
            this.#contentDiv.append(bookDiv);
        }
    }
}



class Application {
    #filterByTitle;
    #filterByAuthor;
    #display;
    #books;

    constructor(books, display) {
        this.#books = books;
        this.#filterByAuthor = new FilterByAuthor(books);
        this.#filterByTitle = new FilterByTitle(books);
        this.#display = display;
    }

    filter(searchInput) {
        let filteredBooks = [];
        if (searchInput == "") {
            filteredBooks = this.#books;
        } else {
            let matchedByTitle = this.#filterByTitle.find(searchInput);
            let matchedByAuthor = this.#filterByAuthor.find(searchInput);
            filteredBooks = matchedByAuthor.concat(matchedByTitle);    
        }

        this.#display.show(filteredBooks, searchInput);
    }
}


let contentDiv = document.getElementById("books");
let searchInput = document.getElementById("search-input");

let display = new Display(contentDiv);
let application = new Application(books, display);
application.filter(searchInput.value);

searchInput.addEventListener("input", function() {
    setTimeout(() => {
        application.filter(searchInput.value);
    }, 500)
})